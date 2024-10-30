type EChartsOption = echarts.EChartsOption;

/**
 * Function to generate the line graph configuration
 * @param dates - Array of dates
 * @param series - Array of series
 * @returns - EChartsOption
 */
const config = (dates: string[], series: number[]) => {
  const option: EChartsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // Use axis to trigger tooltip
        type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    xAxis: {
      type: "category",
      data: dates,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: series,
        type: "line",
      },
    ],
  };
  return option;
};

export default config;
