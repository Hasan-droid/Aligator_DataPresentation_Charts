import { Grid, Text, Box, Stack } from "@chakra-ui/react";
import PieChart from "./Pie";
import shareOfVoice from "../data/ShareOfVoice.json";
import EstimatedReach from "../data/EstimatedReach.json";
import Engagement from "../data/Engagement.json";
export default function PieChartsGrid() {
  return (
    <Box marginLeft={"-60px"} marginTop={"11vh"} display={"flex"} flexDir={"column"}>
      <Stack display={"flex"} alignItems={"flex-start"} direction={"column"} width={"100%"}>
        <Box marginBottom={"2vh"}>
          <Text width={"100%"} textAlign={"left"} color={"gray.600"} fontWeight={"bold"} fontSize={"md"}>
            Euro 2024 sponsors performance | Platforms overview
          </Text>
        </Box>
        <Grid templateColumns="repeat(3,1fr)" gap={"3vw"}>
          <PieChart data={shareOfVoice} title={"Platforms - share of voices"} />
          <PieChart data={EstimatedReach} title={"Platforms - Estimated Reach"} />
          <PieChart data={Engagement} title={"Platforms - Engagement"} />
        </Grid>
      </Stack>
    </Box>
  );
}
