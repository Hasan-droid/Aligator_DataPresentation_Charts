import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({

  styles: {
    global: {
      body: {
        bg: "gray.200",
        color: "gray.800",
        fontFamily: "sans-serif",
        fontSize: "20px",
      },
    },
  },
});



export default customTheme;
