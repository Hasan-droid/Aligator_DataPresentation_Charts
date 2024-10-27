type EChartsOption = echarts.EChartsOption;
interface IPieDataFormat extends EChartsOption {
  value: number;
  name: string;
  itemStyle: { color: string };
}
/**
 * this function is used to generate the pie chart
 * @param pieDataFormat - the data to be used in the pie chart ,
 * @returns EChartsOption
 */
const config = (pieDataFormat: IPieDataFormat[]) => {
  const option: EChartsOption = {
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        top: "10%",
        name: "Access From",
        type: "pie",
        radius: ["30%", "70%"],
        avoidLabelOverlap: false,
        label: { position: "inside", formatter: "{d}%", color: "#ededed", fontSize: 12 },
        emphasis: {
          label: {
            show: true,
            fontSize: 15,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: pieDataFormat,
      },
    ],
  };
  return option;
};

export default config;
