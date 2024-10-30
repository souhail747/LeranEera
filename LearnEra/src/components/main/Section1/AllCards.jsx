import { useState } from "react";
import ActionAreaCard from "./ActionAreaCard";
import Stack from "@mui/material/Stack";
import Filter from "./Filter";
import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const AllCards = () => {
  const [selectedCategory, setSelectedCategory] = useState("All courses");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentIndex(0); 
  };

  const cards = [
    {
      id: 1,
      img: "./src/Images/react.png",
      desc: "1",
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
  ];

  const filteredCards =
    selectedCategory === "All courses"
      ? cards
      : cards.filter(
          (card) => card.cat.toLowerCase() === selectedCategory.toLowerCase()
        );

  const cardsToShow = filteredCards.slice(currentIndex, currentIndex + 6);

  const handleShowMore = () => {
    if (currentIndex + 6 < filteredCards.length) {
      setCurrentIndex(currentIndex + 6);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleShowLess = () => {
    if (currentIndex - 6 >= 0) {
      setCurrentIndex(currentIndex - 6);
    } else {
      setCurrentIndex(0); 
    }
  };

  return (
    <Box  className="border2"
      display={"flex"}
      flexDirection={"column"}
      gap={4}
     
  /*     alignItems={"center"}
      justifyContent={"center"} */
      sx={{ width: "72vw", position: "relative", margin: "0 auto" }}
    >
      <Filter onCategoryChange={handleCategoryChange} />
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
      >
             {/* Box fleche ISaar */}
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "55px",
            width: "55px",
          }}
        >
          {currentIndex > 0 && (
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

        <Stack className="border2"
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={4}
flexShrink={55}          
          flexWrap={"wrap"}
/*           sx={{ width: "100%", height:"100%",minheight: "800px"}}
 */        >
          {cardsToShow.map((card) => (
            <ActionAreaCard
              key={card.id}
              img={card.img}
/*               desc={card.desc}
 */              formater={card.formater}
              cat={card.cat}
            />
          ))}
        </Stack>
        
        {/* Box fleche Imiin */}
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "55px",
            width: "55px",
          }}
        >
          {currentIndex + 6 < filteredCards.length && (
            <ArrowForwardIcon
              onClick={handleShowMore}
              sx={{
                padding: "10px",
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
    </Box>
  );
};

export default AllCards;
