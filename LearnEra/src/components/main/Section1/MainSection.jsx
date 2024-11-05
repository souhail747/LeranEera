import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AllCards from "./AllCards";
import SwiperComponent from "./SwiperComponent";

export default function MainSection() {
  return (
    <Stack flexDirection={"row"} flexWrap={"nowrap"} paddingTop={"15px"}>
      <AllCards />
      <Box
        className="hide-on-mobile"
        sx={{
          width: { md: "25vw", xs: "100vw", sm: "100vw" },
        }}
      >
        <SwiperComponent ispc={false} w="25vw" h="88vh" />
      </Box>
    </Stack>
  );
}
