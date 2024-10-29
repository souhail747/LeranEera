import { useState } from "react";
import ActionAreaCard from "./ActionAreaCard";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Filter from "./Filter";
import { Box } from "@mui/material";

const AllCards = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All courses");

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const cards = [
    {
      id: 1,
      img: "./src/Images/react.png",
      desc: "web",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 2,
      img: "./src/Images/react.png",
      desc: "js",
      formater: "souhail",
      cat: "js",
    },
    {
      id: 3,
      img: "./src/Images/react.png",
      desc: "react",
      formater: "souhail",
      cat: "react",
    },
    {
      id: 4,
      img: "./src/Images/react.png",
      desc: "desgin",
      formater: "souhail",
      cat: "design",
    },
    {
      id: 5,
      img: "./src/Images/react.png",
      desc: "next",
      formater: "souhail",
      cat: "nextjs",
    },
    {
      id: 6,
      img: "./src/Images/react.png",
      desc: "web",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 7,
      img: "./src/Images/react.png",
      desc: "web",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 1,
      img: "./src/Images/react.png",
      desc: "web",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 2,
      img: "./src/Images/react.png",
      desc: "js",
      formater: "souhail",
      cat: "js",
    },
    {
      id: 3,
      img: "./src/Images/react.png",
      desc: "react",
      formater: "souhail",
      cat: "react",
    },
    {
      id: 4,
      img: "./src/Images/react.png",
      desc: "desgin",
      formater: "souhail",
      cat: "design",
    },
    {
      id: 5,
      img: "./src/Images/react.png",
      desc: "next",
      formater: "souhail",
      cat: "nextjs",
    },
    {
      id: 6,
      img: "./src/Images/react.png",
      desc: "web",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 7,
      img: "./src/Images/react.png",
      desc: "web",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 1,
      img: "./src/Images/react.png",
      desc: "web",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 2,
      img: "./src/Images/react.png",
      desc: "js",
      formater: "souhail",
      cat: "js",
    },
    {
      id: 3,
      img: "./src/Images/react.png",
      desc: "react",
      formater: "souhail",
      cat: "react",
    },
    {
      id: 4,
      img: "./src/Images/react.png",
      desc: "desgin",
      formater: "souhail",
      cat: "design",
    },
    {
      id: 5,
      img: "./src/Images/react.png",
      desc: "next",
      formater: "souhail",
      cat: "nextjs",
    },
    {
      id: 6,
      img: "./src/Images/react.png",
      desc: "web",
      formater: "souhail",
      cat: "web",
    },
    {
      id: 7,
      img: "./src/Images/react.png",
      desc: "web",
      formater: "souhail",
      cat: "web",
    },
    // Add more cards as needed
  ];

  const filteredCards =
    selectedCategory === "All courses"
      ? cards
      : cards.filter((card) => card.cat === selectedCategory.toLowerCase());

  const cardsToShow = showAll ? filteredCards : filteredCards.slice(0, 6);

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={4}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ width: "72vw", position: "relative", margin: " 0 auto" }}
      >
        <Filter onCategoryChange={handleCategoryChange} />
        <Stack
          flexDirection={"row"}
          gap={4}
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          sx={{ width: "75vw", position: "relative" }}
        >
          {cardsToShow.map((card) => (
            <ActionAreaCard
              key={card.id}
              img={card.img}
              desc={card.desc}
              formater={card.formater}
            />
          ))}
          {!showAll && filteredCards.length > 6 && (
            <Typography
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  transform: "scale(1.2)",
                  transition: "transform 0.3s ease-out",
                  textDecoration: "underline",
                },
                width: "155px",
                height: "44px",
                position: "absolute",
                bottom: 0,
                right: "150px",
                margin: "-60px",
              }}
              onClick={handleShowMore}
              color="primary"
            >
              Learn More
            </Typography>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default AllCards;
