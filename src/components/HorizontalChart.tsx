import ChartContainer from "./chartContainer";
import { formatDate } from "../utils/dateUtils";
import horizontalChartOptions from "../chartsConfigs/horizontalChartConfig";
import { IHorizontalChartProps } from "../types/charts/horizontalChartTypes";

/**
 * this component is used to display the horizontal chart
 * @param data - the data to be used in the horizontal chart
 */
export default function HorizontalChart({ data }: IHorizontalChartProps) {
  const startDate = formatDate(data.startDate);
  const endDate = formatDate(data.endDate);

  /**
   * Group the data by keyword and store the number of mentions for each source
   *
   * keyword :{source: [20], source2: [30]}
   *
   * e.g. {Technology: {facebook: [20], twitter: [30]}, Sports: {facebook: [10], twitter: [40]}
   * @param data - the data to be grouped
   * @returns { [key: string]: { [key: string]: number[] } }
   */
  const groupData = (data: { source: string; keyword: string; numMentions: number }[]) => {
    return data.reduce(
      (
        acc: { [key: string]: { [key: string]: number[] } },
        item: { source: string; keyword: string; numMentions: number }
      ) => {
        if (!acc[item.keyword]) {
          acc[item.keyword] = { [item.source]: [item.numMentions] };
          return acc;
        }
        if (!acc[item.keyword][item.source]) {
          acc[item.keyword][item.source] = [];
        }
        acc[item.keyword][item.source].push(item.numMentions);

        //if it
        return acc;
      },
      {}
    );
  };

  /**
   *aggregate the data by source and store the number of mentions for each keyword
   *
   *  {source: [20, 30], source2: [10, 40]}
   *
   *e.g: {facebook: [20, 30], twitter: [10, 40]}
   * @param groupedData
   * @returns
   */
  const aggregateData = (groupedData: { [keyword: string]: { [source: string]: number[] } }) => {
    const aggregatedData: { [source: string]: number[] } = {};

    Object.values(groupedData).forEach((keywordData) => {
      Object.keys(keywordData).forEach((source) => {
        if (!aggregatedData[source]) {
          aggregatedData[source] = [];
        }
        aggregatedData[source] = aggregatedData[source].concat(keywordData[source]);
      });
    });

    return aggregatedData;
  };

  const groupedData = groupData(data.data);
  const aggregatedData = aggregateData(groupedData);

  // Create series data
  const series = Object.keys(aggregatedData).map((source) => ({
    name: source,
    type: "bar" as const,
    data: aggregatedData[source],
    stack: "a",
    emphasis: {
      focus: "series" as const,
    },
  }));

  const yAxisData = Object.keys(groupedData);

  const options = horizontalChartOptions({ series, yAxisData });
  return (
    <ChartContainer
      option={options}
      title="Key topics - Ranking"
      startDate={startDate}
      endDate={endDate}
      width={"75vw"}
      height={"75vh"}
    />
  );
}
