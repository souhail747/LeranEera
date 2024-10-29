/* eslint-disable no-unused-vars */
import MainSection from "./components/main/Section1/MainSection";
import "./App.css";
import Header from "./components/header/Header";
import BigCard from "./components/main/Section1/BigCard";
import AllCards from "./components/main/Section1/AllCards";
;
/* import BigCard from "./components/main/BigCard";
 */
function App() {
  return (
    <>
<<<<<<< HEAD
   <BigCard/>
=======
      <Header />
      <Stack flexDirection={"row"} >
        <AllCards />
        <Box
          sx={{
            width: "25vw",
          }}
        >
        <SwiperComponent />
        </Box>
      </Stack>
>>>>>>> 1f7d8d9cda460c1e63e44d90df2223c1737ef6cc
    </>
  );
}

export default App;
