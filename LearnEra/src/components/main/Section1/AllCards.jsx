import { useEffect, useState } from "react";
import ActionAreaCard from "./ActionAreaCard";
import Stack from "@mui/material/Stack";
import Filter from "./Filter";
import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SwiperComponent from "./SwiperComponent";
import { Button } from "@mui/material";
import BigCard from "./BigCard";
const AllCards = () => {
  const [big, setbig] = useState(false);
  const openbig = () => {
    setbig(true);
  };
  const [selectedCategory, setSelectedCategory] = useState("All courses");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };
  const [isPC, setIsPC] = useState(window.innerWidth >= 768);
  const [CardNumbers, setCardNumbers] = useState(
    window.innerWidth >= 768 ? 8 : 4
  );

  useEffect(() => {
    const handleResize = () => {
      const isPC = window.innerWidth >= 768;
      setIsPC(isPC);
      setCardNumbers(isPC ? 8 : 4);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cards = [
    {
      id: 1,
      img: "./src/Images/react.png",
      desc: "Its  a  web formation A to z reactjs.",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 2,
      img: "./src/Images/react.png",
      desc: "2",
      formater: "souhail",
      cat: "js",
    },
    {
      id: 3,
      img: "./src/Images/react.png",
      desc: "3",
      formater: "souhail",
      cat: "react",
    },
    {
      id: 4,
      img: "./src/Images/react.png",
      desc: "4",
      formater: "souhail",
      cat: "design",
    },
    {
      id: 5,
      img: "./src/Images/react.png",
      desc: "5",
      formater: "souhail",
      cat: "nextjs",
    },
    {
      id: 6,
      img: "./src/Images/react.png",
      desc: "6",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 7,
      img: "./src/Images/react.png",
      desc: "7",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 8,
      img: "./src/Images/react.png",
      desc: "8",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 9,
      img: "./src/Images/react.png",
      desc: "9",
      formater: "souhail",
      cat: "js",
    },
    {
      id: 10,
      img: "./src/Images/react.png",
      desc: "10",
      formater: "souhail",
      cat: "react",
    },
    {
      id: 11,
      img: "./src/Images/react.png",
      desc: "11",
      formater: "souhail",
      cat: "design",
    },
    {
      id: 12,
      img: "./src/Images/react.png",
      desc: "12",
      formater: "souhail",
      cat: "nextjs",
    },
    {
      id: 13,
      img: "./src/Images/react.png",
      desc: "13",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 14,
      img: "./src/Images/react.png",
      desc: "14",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 15,
      img: "./src/Images/react.png",
      desc: "15",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 16,
      img: "./src/Images/react.png",
      desc: "16",
      formater: "souhail",
      cat: "js",
    },
    {
      id: 17,
      img: "./src/Images/react.png",
      desc: "17",
      formater: "souhail",
      cat: "react",
    },
    {
      id: 18,
      img: "./src/Images/react.png",
      desc: "18",
      formater: "souhail",
      cat: "design",
    },
    {
      id: 19,
      img: "./src/Images/react.png",
      desc: "19",
      formater: "souhail",
      cat: "nextjs",
    },
    {
      id: 20,
      img: "./src/Images/react.png",
      desc: "20",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 21,
      img: "./src/Images/react.png",
      desc: "21",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 22,
      img: "./src/Images/react.png",
      desc: "21",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 23,
      img: "./src/Images/react.png",
      desc: "21",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 24,
      img: "./src/Images/react.png",
      desc: "21",
      formater: "souhail",
      cat: "web",
    },
  ];

  const filteredCards =
    selectedCategory === "All courses"
      ? cards
      : cards.filter(
          (card) => card.cat.toLowerCase() === selectedCategory.toLowerCase()
        );

  const cardsToShow = filteredCards.slice(
    currentIndex,
    currentIndex + CardNumbers
  );

  const handleShowMore = () => {
    if (currentIndex + CardNumbers < filteredCards.length) {
      setCurrentIndex(currentIndex + CardNumbers);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleShowLess = () => {
    if (currentIndex - CardNumbers >= 0) {
      setCurrentIndex(currentIndex - CardNumbers);
    } else {
      setCurrentIndex(filteredCards.length-8);
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      /*     alignItems={"center"}
      justifyContent={"center"} */
      sx={{
        width: "100vw",
        height: "90h",
        position: "relative",
        margin: "0 auto",
      }}
    >
      <Filter onCategoryChange={handleCategoryChange} />
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
        mt="35px"
      >
        {/* Box fleche ISaar */}
        {isPC && (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "155px",
              width: "155px",
            }}
          >
            {currentIndex > -1 && (
              <ArrowBackIcon
                onClick={handleShowLess}
                sx={{
                  maxWidth: "55px",
                  width: "55px",
                  fontSize: "40px",
                  padding: "10px",
                  borderRadius: "50px",
                  "&:hover": {
                    color: "#2cccc4",
                    cursor: "pointer",
                  },
                }}
              />
            )}
          </Box>
        )}
        {/* Caards */}
       
       
        <Stack
        sx={{borderRadius:"20px"}}
          py={"10px"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={4}
          flexWrap={"wrap"}
        
        >
          {cardsToShow.map((card) => (
            <button
            onClick={openbig}
            >
            <ActionAreaCard
              
              key={card.id}
              img={card.img}
              desc={card.desc}
              formater={card.formater}
            />
            </button>
          ))}
        </Stack>
          {big && <BigCard setbig={setbig} />}
        {/* Box fleche Imiin */}
        {isPC && (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              maxWidth: "155px",
              width: "155px",
            }}
          >
            {currentIndex + 6 < filteredCards.length && (
              <ArrowForwardIcon
                onClick={handleShowMore}
                sx={{
                  fontSize: "40px",

                  maxWidth: "55px",
                  width: "55px",
                  borderRadius: "50px",
                  "&:hover": {
                    color: "#2cccc4",
                    cursor: "pointer",
                  },
                }}
              />
            )}
          </Box>
        )}
      </Stack>
      {!isPC && (
        <Stack
          sx={{ height: "100%" }}
          flexDirection={"row"}
          alignContent={"center"}
          justifyContent={"center"}
          my="10px"
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: { md: "center", xs: "flex-start" },

              maxWidth: "155px",
              width: "155px",
            }}
          >
            {currentIndex > 0 && (
              <ArrowBackIcon
                onClick={handleShowLess}
                sx={{
                  fontSize: "40px",

                  maxWidth: "55px",
                  width: "55px",
                  borderRadius: "50px",
                  "&:hover": {
                    color: "#2cccc4",
                    cursor: "pointer",
                  },
                }}
              />
            )}
          </Box>

          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: { md: "center", xs: "flex-start" },

              maxWidth: "155px",
              width: "155px",
            }}
          >
            {currentIndex + 6 < filteredCards.length && (
              <ArrowForwardIcon
                onClick={handleShowMore}
                sx={{
                  fontSize: "40px",

                  maxWidth: "55px",
                  width: "55px",
                  borderRadius: "50px",
                  "&:hover": {
                    color: "#2cccc4",
                    cursor: "pointer",
                  },
                }}
              />
            )}
          </Box>
        </Stack>
      )}
      {!isPC && (
        <Box  sx={{height:"100%"}}>
          
          <SwiperComponent w="100vw" h="30vh"  ispc={!isPC}/>{" "}
        </Box>
  

      )}

       
    </Box>
  );
};

export default AllCards;
