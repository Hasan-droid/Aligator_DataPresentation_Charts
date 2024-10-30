type EChartsOption = echarts.EChartsOption;

/**
 * Function to generate the line graph configuration
 * @param dates - Array of dates
 * @param series - Array of series
 * @returns - EChartsOption
 */
const config = (dates: string[], series: number[]) => {
  const option: EChartsOption = {
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
