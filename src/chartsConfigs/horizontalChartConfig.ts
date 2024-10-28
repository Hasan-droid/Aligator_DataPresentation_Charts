type EChartsOption = echarts.EChartsOption;
import { IHorizontalChartConfig } from "../types/charts/horizontalChartTypes";

/**
 * this function is used to generate the horizontal chart
 * @param yAxisData - the data to be used in y-axis of the chart
 * @param series - the data to be used in the series of the chart
 * @returns EChartsOption
 */
const config = ({ yAxisData, series }: IHorizontalChartConfig) => {
  const options: EChartsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // Use axis to trigger tooltip
        type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: yAxisData,
    },
    series: series,
  };
  return options;
};

export default config;
