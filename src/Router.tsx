import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";
import PieChartsGrid from "./components/PieChartsGrid";
import VerticalChart from "./components/VerticalChart";
import HorizontalChart from "./components/HorizontalChart";
import postsOverTimeData from "../src/data/PostsOverTime.json";
import rankingData from "../src/data/Ranking.json";
import LineGraph from "./components/LineGraph";
import EstimatedReachData from "./data/EstimatedReach.json";
import ShareOfVoiceData from "./data/ShareOfVoice.json";
import EngagementData from "./data/Engagement.json";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/pie",
        element: <PieChartsGrid />,
      },
      {
        path: "/vertical",
        element: <VerticalChart data={postsOverTimeData} />,
      },
      {
        path: "/horizontal",
        element: <HorizontalChart data={rankingData} />,
      },
      {
        path: "/linegraph",
        element: <LineGraph dataSet1={EstimatedReachData} dataSet2={ShareOfVoiceData} dataSet3={EngagementData} />,
      },
    ],
  },
]);

//export Router
export default Router;
