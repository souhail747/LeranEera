import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AllCards from "./AllCards";
import SwiperComponent from "./SwiperComponent";

export default function MainSection() {
  return (
    <Stack flexDirection={"row"} flexWrap={"nowrap"}>

    <AllCards/>
  <Box
       sx={{
         width: "25vw",
       }}
     >
       <SwiperComponent />
     </Box>
     x
   </Stack>   )
}
