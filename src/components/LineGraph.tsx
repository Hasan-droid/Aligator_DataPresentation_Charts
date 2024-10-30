import { formatDate, formatDate_MMDDYYYY } from "../utils/dateUtils";
import ChartContainer from "./ChartContainer";
import lineChartOptions from "../chartsConfigs/lineGraphOptions";
import { ILineGraphProps } from "../types/charts/lineGraphTypes";

/**
 * this component is used to display the line graph
 * @param data - the data to be displayed in the line graph
 */
export default function LineGraph({ data }: ILineGraphProps) {
  const startDate = formatDate(data.startDate);
  const endDate = formatDate(data.endDate);

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

  const numberOfIntervals = data.data.length;

  const datesBetween = generateDateIntervals(data.startDate, data.endDate, numberOfIntervals);

  const dates = datesBetween.map((date) => formatDate_MMDDYYYY(date));

  const series = data.data.map((item) => item.estimatedReach);

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
