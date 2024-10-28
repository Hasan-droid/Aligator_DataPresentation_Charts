/**
 * interface for horizontal chart config
 */
export interface IHorizontalChartConfig {
  series: {
    name: string;
    type: "bar";
    data: number[];
    stack: string;
    emphasis: {
      focus: "series";
    };
  }[];
  yAxisData: string[];
}

/**
 * props types for the horizontal chart
 */

export interface IHorizontalChartProps {
  data: {
    startDate: number;
    endDate: number;
    data: {
      source: string;
      keyword: string;
      numMentions: number;
    }[];
  };
}
