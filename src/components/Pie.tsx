import { formatDate } from "../utils/dateUtils";
import pieChartOptions from "../chartsConfigs/pieChartConfig";
import { IPieProps } from "../types/charts/pieChartTypes";
import ChartContainer from "./ChartContainer";

const PieChart: React.FC<IPieProps> = ({ data, title }) => {
  //format startDate
  const startDate = formatDate(data.startDate);

  //format endDate
  const endDate = formatDate(data.endDate);

  // format the data to be used in the pie chart
  const pieDataFormat = data.data.map((item) => {
    return {
      value: item[Object.keys(item)[2]] as number,
      name: item.source,
      itemStyle: { color: item.sourceColor },
    };
  });

  // get the pie chart options
  const option = pieChartOptions(pieDataFormat);
  return (
    <ChartContainer
      title={title}
      startDate={startDate}
      endDate={endDate}
      width={"28vw"}
      height={"49vh"}
      option={option}
    />
  );
};

export default PieChart;
