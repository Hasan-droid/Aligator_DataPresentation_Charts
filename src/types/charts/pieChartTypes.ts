/**
 * Pie chart props
 */
export interface PieProps {
  data: {
    startDate: number;
    endDate: number;
    data: {
      source: string;
      sourceColor: string;
      [key: string]: number | string;
    }[];
  };
  title: string;
}
