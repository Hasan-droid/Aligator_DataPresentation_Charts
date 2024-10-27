import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";
import PieChartsGrid from "./components/PieChartsGrid";

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
    ],
  },
]);

//export Router
export default Router;
