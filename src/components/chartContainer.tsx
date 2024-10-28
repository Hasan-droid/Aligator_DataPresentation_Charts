import { Box, Stack, Text } from "@chakra-ui/react";
import { centerPanel, outerBoxBorderStyles, textEllipsisStyle } from "../theme/chakra/styles";
import ReactEcharts from "echarts-for-react";
import { EChartsOption } from "echarts";

type ChartContainerProps = {
  title: string;
  startDate: string;
  endDate: string;
  width: string;
  height: string;
  option: EChartsOption;
};

/**
 * this component is used to display the chart container
 * @param title - the title of the chart
 * @param width - the width of the chart
 * @param height - the height of the chart
 * @param option - the option of the chart
 */
export default function ChartContainer({ title, startDate, endDate, width, height, option }: ChartContainerProps) {
  return (
    <Box width={width} height={height} marginTop={"17vh"} {...centerPanel} {...outerBoxBorderStyles}>
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
}
