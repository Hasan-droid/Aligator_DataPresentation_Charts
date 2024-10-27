import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./theme/chakra/customTheme.ts";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <RouterProvider router={Router} />
    </ChakraProvider>
  </StrictMode>
);
