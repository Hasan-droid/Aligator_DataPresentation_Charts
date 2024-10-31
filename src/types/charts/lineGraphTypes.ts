import { IPieProps } from "./pieChartTypes";

/**
 * Interface for the LineGraph component props
 */
export interface ILineGraphProps {
  dataSet1: {
    startDate: number;
    endDate: number;
    data: {
      estimatedReach: number;
    }[];
  };
  dataSet2: IPieProps["data"];
  dataSet3: IPieProps["data"];
}
