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

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/pie",
        element: <PieChartsGrid />,
        index: true,
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
        element: <LineGraph data={EstimatedReachData} />,
      },
    ],
  },
]);

//export Router
export default Router;
