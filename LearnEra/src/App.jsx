import SwiperComponent from "./components/main/SwiperComponent";
import "./App.css";
import Header from "./components/header/Header";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import AllCards from "./components/main/AllCards";
/* import BigCard from "./components/main/BigCard";
 */
function App() {
 

  return (
    <>
  
    
    
         <Header />
      <Stack flexDirection={"row"} flexWrap={"nowrap"}>

       <AllCards/>
     
      
      
      
      <Box
          sx={{
            width: "25vw",
          }}
        >
          <SwiperComponent />
        </Box>
      </Stack> 
    </>
  );
}

export default App;
