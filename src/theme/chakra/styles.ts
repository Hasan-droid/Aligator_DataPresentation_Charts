import { StackProps } from "@chakra-ui/react";
/**
 * text display as points when shrinking the window ,
 * always set the width of the text container to use this style
 */
export const textEllipsisStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

/**
 * styles for the flex center panel , used with multiple boxes in the page
 */
export const centerPanel: StackProps = {
  backgroundColor: "white",
  padding: "5vh",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  display: "flex",
};

/**
 * styles for the outer box border
 */
export const outerBoxBorderStyles = {
  borderColor: "gray.200",
  borderRadius: "10px",
  boxShadow: "lg",
};
