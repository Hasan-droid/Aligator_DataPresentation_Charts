import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";
import PieChartsGrid from "./components/PieChartsGrid";
import VerticalChart from "./components/VerticalChart";
import postsOverTimeData from "../src/data/PostsOverTime.json";

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
    ],
  },
]);

//export Router
export default Router;
