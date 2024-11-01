import { useEffect, useState } from "react";
import ActionAreaCard from "./ActionAreaCard";
import Stack from "@mui/material/Stack";
import Filter from "./Filter";

const AllCards = () => {
  const [selectedCategory, setSelectedCategory] = useState("All courses");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };
  const [isPC, setIsPC] = useState(window.innerWidth >= 768);
  const [CardNumbers, setCardNumbers] = useState(
    window.innerWidth >= 768 ? 6 : 4
  );

  useEffect(() => {
    const handleResize = () => {
      const isPC = window.innerWidth >= 768;
      setIsPC(isPC);
      setCardNumbers(isPC ? 6 : 4);
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
      id: 1,
      img: "./src/Images/react.png",
      desc: "web",
      formater: "souhail",
      cat: "design",
    },
    {
      id: 5,
      img: "./src/Images/react.png",
      desc: "js",
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
      desc: "js",
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
    },  {
      id: 1,
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
      setCurrentIndex(0);
    }
  };

  return (
    <>
      <Stack
        flexDirection={"row"}
        gap={4}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        sx={{ width: "100vw", position: "relative" }}
      >
        <Filter onCategoryChange={handleCategoryChange} />
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
    </>
  );
};

export default AllCards;
