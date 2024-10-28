import { IVerticalChartConfig } from "../types/charts/verticalTypes";
type EChartsOption = echarts.EChartsOption;

/**
 * this function is used to generate the vertical stacked chart
 * @param groupedData - the data grouped by source,
 * @param xAxisData - the unique dates,
 * @param series - the data to be used in the vertical chart series
 */
const config = ({ groupedData, xAxisData, series }: IVerticalChartConfig) => {
  const option: EChartsOption = {
    legend: {
      data: Object.keys(groupedData),
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      data: xAxisData,
    },
    yAxis: {},
    series: [...series],
  };
  return option;
};

export default config;
