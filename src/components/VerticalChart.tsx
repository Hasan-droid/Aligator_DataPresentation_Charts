import { Box, Stack, Text } from "@chakra-ui/react";
import { centerPanel, outerBoxBorderStyles, textEllipsisStyle } from "../theme/chakra/styles";
import ReactEcharts from "echarts-for-react";
import { formatDate_MMDDYYYY } from "../utils/dateUtils";
import { verticalChartPropsTypes } from "../types/charts/verticalTypes";
import verticalChartOptions from "../chartsConfigs/verticalChartConfig";

/**
 * this component is used to display the vertical stacked chart
 * @param data - the data to be used in the vertical chart
 */
const VerticalChart: React.FC<verticalChartPropsTypes> = ({ data }) => {
  /**
   * Group the data by source
   * e.g {facebook: [1, 2, 3], twitter: [4, 5, 6]}
   */
  const groupedData = data.data.reduce(
    (acc: { [key: string]: number[] }, item: { date: number; source: string; numMentions: number }) => {
      if (!acc[item.source]) {
        acc[item.source] = [];
      }
      acc[item.source].push(item.numMentions);
      return acc;
    },
    {}
  );

  /**
   * Get the unique dates
   * e.g ["March 24, 2021", "March 25, 2021"]
   * */
  const xAxisData = data.data.reduce((acc: string[], item: { date: number }) => {
    if (!acc.includes(formatDate_MMDDYYYY(item.date))) {
      acc.push(formatDate_MMDDYYYY(item.date));
    }
    return acc;
  }, []);

  /**
   * Format the data to be used in the vertical chart
   * e.g [{type: "bar", name: "facebook", data: [1, 2, 3], stack: "a"}]
   */
  const series = Object.keys(groupedData).map((key) => {
    return {
      type: "bar" as const,
      name: key,
      data: groupedData[key],
      stack: "a",
    };
  });

  // get the vertical chart options
  const option = verticalChartOptions({ groupedData, xAxisData, series });

  return (
    <Box width={"75vw"} height={"75vh"} marginTop={"17vh"} {...centerPanel} {...outerBoxBorderStyles}>
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
            {"title"}
          </Text>
          <Text fontSize={"xs"} color={"gray.500"}>
            {"startDate"} - {"endDate"}
          </Text>
        </Stack>
      </Box>
      <ReactEcharts option={option} style={{ width: "inherit", height: "inherit" }} />
    </Box>
  );
};

export default VerticalChart;
