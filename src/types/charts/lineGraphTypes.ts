export interface ILineGraphProps {
  data: {
    startDate: number;
    endDate: number;
    data: {
      estimatedReach: number;
    }[];
  };
}
