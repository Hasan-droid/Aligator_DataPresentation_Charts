/**
 * Pie chart props
 */
export interface IPieProps {
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
