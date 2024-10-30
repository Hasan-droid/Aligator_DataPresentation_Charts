import { Box, ChakraStyledOptions, Flex, Image, Stack, Text } from "@chakra-ui/react";
import logOutImage from "../assets/logout_svgrepo.com.png";
import { textEllipsisStyle } from "../theme/chakra/styles";
import alligatorIcon from "../assets/alligator.jpeg";
import { Outlet, useNavigate } from "react-router-dom";

const navBarItemsStyle: ChakraStyledOptions = {
  fontSize: "md",
  textAlign: "center",
  marginLeft: "4px",
  color: "gray.600",
  ...textEllipsisStyle,
  cursor: "pointer",
  _hover: { color: "gray.500", borderColor: "gray.400", borderWidth: "3px" },
  borderRadius: "10px",
  borderWidth: "2px",
  padding: "0.4vw",
};

/**
 * this component is used to display the main layout of the application , it contains the nav bar
 */
export default function MainLayout() {
  const navigate = useNavigate();

  // this function is used to navigate to the specified path
  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <>
      <Box
        zIndex={1}
        width={"100vw"}
        height={"8vh"}
        backgroundColor={"white"}
        position={"fixed"}
        top={0}
        left={0}
        alignItems={"baseline"}
        boxShadow={"xl"}
      >
        <Flex justifyContent={"space-between"} width={"100vw"} minHeight={"inherit"} backgroundColor={"white"}>
          <Box display={"flex"} alignItems={"center"} marginLeft={"15px"} marginTop={"16px"} marginBottom={"12px"}>
            <Image
              width={"156px"} // Adjust the size as needed
              height={"49px"} // Adjust the size as needed
              src={alligatorIcon}
              alt="aligator"
              objectFit="contain" // Ensures the image scales correctly
              onClick={() => handleNavigation("/")}
            />
            <Stack marginLeft={"20px"} direction={"row"} width={"100%"} spacing={"2vw"}>
              <Box width="56px" height="45px" onClick={() => handleNavigation("/pie")}>
                <Text {...navBarItemsStyle}>Pie</Text>
              </Box>
              <Box width="113px" height="1px" onClick={() => navigate("/horizontal")}>
                <Text {...navBarItemsStyle}>Horizontal</Text>
              </Box>
              <Box width="95px" height="1px" onClick={() => navigate("/vertical")}>
                <Text {...navBarItemsStyle}>Vertical</Text>
              </Box>
              <Box width="130px" height="1px" onClick={()=>handleNavigation("/linegraph")}>
                <Text {...navBarItemsStyle}>Line Graph</Text>
              </Box>
            </Stack>
          </Box>

          <Box marginTop={"13px"} marginRight={"9px"}>
            <Image width={"50px"} height={"50px"} src={logOutImage} alt="back" cursor={"pointer"} />
          </Box>
        </Flex>
      </Box>
      <Box position={"relative"} marginTop={"6vh"}>
        <Outlet />
      </Box>
    </>
  );
}
