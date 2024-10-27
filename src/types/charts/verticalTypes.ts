/**
 * this interface is used in the configuration options for the vertical chart
 */
export interface IHorizontalChartConfig {
  groupedData: { [key: string]: number[] };
  xAxisData: string[];
  series: {
    type: "bar";
    name: string;
    data: number[];
    stack: string;
  }[];
}

/**
 * props types for the vertical chart
 */
export type verticalChartPropsTypes = {
  data: {
    startDate: number;
    endDate: number;
    data: {
      source: string;
      date: number;
      numMentions: number;
    }[];
  };
};
