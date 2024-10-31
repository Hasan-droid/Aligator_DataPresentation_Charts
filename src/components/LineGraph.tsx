import { formatDate, formatDate_MMDDYYYY } from "../utils/dateUtils";
import ChartContainer from "./ChartContainer";
import lineChartOptions from "../chartsConfigs/lineGraphConfig";
import { ILineGraphProps } from "../types/charts/lineGraphTypes";

/**
 * this component is used to display the line graph
 * @param dataSet1 - the first data set
 * @param dataSet2 - the second data set
 * @param dataSet3 - the third data set
 */
export default function LineGraph({ dataSet1, dataSet2, dataSet3 }: ILineGraphProps) {
  const startDate = formatDate(dataSet1.startDate);
  const endDate = formatDate(dataSet1.endDate);

  /**
   *  insert dates between the start and end date , based on the number of intervals
   * @param startDate - the start date
   * @param endDate - the end date
   * @param intervals - the number of intervals
   * @returns
   */
  const generateDateIntervals = (startDate: number, endDate: number, intervals: number) => {
    const interval = (endDate - startDate) / intervals;
    const dates = [];
    for (let i = 0; i < intervals; i++) {
      dates.push(startDate + i * interval);
    }
    return dates;
  };

  const numberOfIntervals = dataSet1.data.length;

  const datesBetween = generateDateIntervals(dataSet1.startDate, dataSet1.endDate, numberOfIntervals);

  const dates = datesBetween.map((date) => formatDate_MMDDYYYY(date));

  const series1 = dataSet1.data.map((item) => item.estimatedReach);

  const series2 = dataSet2.data.map((item) => item.numMentions);

  const series3 = dataSet3.data.map((item) => item.engagementCount);

  const series = [
    {
      data: series1,
      type: "line" as const,
    },
    {
      data: series2,
      type: "line" as const,
    },
    {
      data: series3,
      type: "line" as const,
    },
  ];

  const option = lineChartOptions(dates, series);

  return (
    <ChartContainer
      title={"Estimated Reach"}
      startDate={startDate}
      endDate={endDate}
      width={"75vw"}
      height={"75vh"}
      option={option}
    />
  );
}
