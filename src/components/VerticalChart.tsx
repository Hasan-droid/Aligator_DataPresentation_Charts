import { formatDate, formatDate_MMDDYYYY } from "../utils/dateUtils";
import { IVerticalChartProps } from "../types/charts/verticalTypes";
import verticalChartOptions from "../chartsConfigs/verticalChartConfig";
import ChartContainer from "./ChartContainer";

/**
 * this component is used to display the vertical stacked chart
 * @param data - the data to be used in the vertical chart
 */
const VerticalChart: React.FC<IVerticalChartProps> = ({ data }) => {
  const startDate = formatDate(data.startDate);
  const endDate = formatDate(data.endDate);

  /**
   * Group the data by source
   *
   * e.g {facebook: [1, 2, 3], twitter: [4, 5, 6]}
   */
  const groupData = (data: { source: string; date: number; numMentions: number }[]) => {
    return data.reduce(
      (acc: { [key: string]: number[] }, item: { date: number; source: string; numMentions: number }) => {
        if (!acc[item.source]) {
          acc[item.source] = [];
        }
        acc[item.source].push(item.numMentions);
        return acc;
      },
      {}
    );
  };

  /**
   * Get the unique dates
   * e.g ["March 24, 2021", "March 25, 2021"]
   * */
  const extractAxisData = (data: { date: number }[]) => {
    return data.reduce((acc: string[], item: { date: number }) => {
      if (!acc.includes(formatDate_MMDDYYYY(item.date))) {
        acc.push(formatDate_MMDDYYYY(item.date));
      }
      return acc;
    }, []);
  };

  const groupedData = groupData(data.data);
  const xAxisData = extractAxisData(data.data);

  /**
   * Format the data to be used in the vertical chart
   * e.g [{type: "bar", name: "facebook", data: [1, 2, 3], stack: "a"}]
   */
  const series = Object.keys(groupedData).map((key) => {
    return {
      type: "bar" as const,
      name: key,
      data: groupedData[key],
      stack: "a",
      emphasis: {
        focus: "series",
      },
    };
  });

  // get the vertical chart options
  const option = verticalChartOptions({ groupedData, xAxisData, series });

  return (
    <ChartContainer
      title={"Euro 24 sponsors - Posts over time"}
      startDate={startDate}
      endDate={endDate}
      option={option}
      width={"75vw"}
      height={"75vh"}
    />
  );
};

export default VerticalChart;
