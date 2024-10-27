import { Box, Stack, Text } from "@chakra-ui/react";
import { centerPanel, outerBoxBorderStyles, textEllipsisStyle } from "../theme/chakra/styles";
import ReactEcharts from "echarts-for-react";
import { formatDate } from "../utils/dateUtils";
import pieChartOptions from "../chartsConfigs/pieChartConfig";

interface PieProps {
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

const PieChart: React.FC<PieProps> = ({ data, title }) => {
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
    <Box width={"28vw"} height={"49vh"} {...centerPanel} {...outerBoxBorderStyles}>
      <Box
        display={"flex"}
        alignItems={"flex-start"}
        justifyItems={"flex-start"}
        marginLeft={"-2vw"}
        marginTop={"-1vh"}
        width={"100%"}
      >
        <Stack
          display={"flex"}
          alignItems={"flex-start"}
          direction={"column"}
          marginBottom={"1vh"}
          {...textEllipsisStyle}
          width={"100%"}
          spacing={1}
        >
          <Text fontSize={"lg"} fontWeight={"bold"} color={"gray.600"}>
            {title}
          </Text>
          <Text fontSize={"xs"} color={"gray.500"}>
            {startDate} - {endDate}
          </Text>
        </Stack>
      </Box>
      <ReactEcharts option={option} style={{ width: "inherit", height: "inherit" }} />
    </Box>
  );
};

export default PieChart;
