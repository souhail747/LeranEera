import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Dialog from "@mui/material/Dialog";
import { Button, Rating, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Comment from "./comment";

export default function BigCard() {
  const buttonArray = ["Web", "Python", "Next js"];
  return (
    <Dialog
      open={true}
      PaperProps={{
        sx: {
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
          maxWidth: "100%",
          width: "65vw",
          height: "100vh",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <img
        width={"100%"}
        height={"30%"}
        src="./src/Images/Bigreact.png"
        alt=""
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "70% 30%",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            borderRight: "2px solid lightgray",
            padding: "0 10px",
            gap: "15px",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: "1.4em",
              my: "20px",
              color: "#333333",
            }}
          >
            React JS full course
          </Typography>
          <Stack>
            <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1.2em",
                alignSelf: "flex-start",
                color: "#333333",
              }}
            >
              Description :
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1em",
                marginLeft: "10px",
                alignSelf: "flex-start",
                color: "#333333",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              perspiciatis dolores velit architecto deleniti voluptas similique
              unde eaque consectetur facere? Quas, commodi. Harum quia ut
              doloribus recusandae provident veniam consequuntur.
            </Typography>
          </Stack>
          <Stack
            flexDirection={"row"}
            alignSelf={"flex-start"}
            alignContent={"center"}
            alignItems={"center"}
          >
            <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1.2em",
                color: "#333333",
              }}
            >
              Rating :
            </Typography>
            <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                size="small"
                readOnly
                sx={{marginLeft:'5px'}}
              />
                          <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1em",
                color: "#333333",
                
              }}
            >
              {"(4.7)"}
            </Typography>
          </Stack>
          <Stack
            flexDirection={"row"}
            alignSelf={"flex-start"}
            alignContent={"center"}
            alignItems={"center"}
          >
            <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1.2em",
                color: "#333333",
              }}
            >
              Price :
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1em",
                color: "#333333",
                marginLeft: "5px",
              }}
            >
              {"49 $(USD)"}
            </Typography>
          </Stack>
          <Stack
            flexDirection={"row"}
            alignSelf={"flex-start"}
            alignContent={"center"}
            alignItems={"center"}
          >
            <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1.2em",
                color: "#333333",
              }}
            >
              Duration :
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1em",
                color: "#333333",
                marginLeft: "5px",
              }}
            >
              {"30 hours"}
            </Typography>
          </Stack>
          <Stack
            flexDirection={"row"}
            alignSelf={"flex-start"}
            alignContent={"center"}
            alignItems={"center"}
          >
            <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1.2em",
                color: "#333333",
              }}
            >
              Format :
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1em",
                color: "#333333",
                marginLeft: "5px",
              }}
            >
              {"in-person"}
            </Typography>
          </Stack>
          <Stack
            flexDirection={"row"}
            alignSelf={"flex-start"}
            alignContent={"center"}
            alignItems={"center"}
          >
            <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1.2em",
                color: "#333333",
              }}
            >
              Level :
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1em",
                color: "#333333",
                marginLeft: "5px",
              }}
            >
              {"Beginner"}
            </Typography>
          </Stack>
          <Stack
            flexDirection={"row"}
            alignSelf={"flex-start"}
            alignContent={"center"}
            alignItems={"center"}
          >
            <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1.2em",
                color: "#333333",
              }}
            >
              Prerequisites :
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1em",
                color: "#333333",
                marginLeft: "5px",
              }}
            >
              {"Basic knowlage about web development (html, css, js)"}
            </Typography>
          </Stack>
          <Stack
            flexDirection={"row"}
            alignSelf={"flex-start"}
            alignContent={"center"}
            alignItems={"center"}
          >
            <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1.2em",
                color: "#333333",
              }}
            >
              Assessment :
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1em",
                color: "#333333",
                marginLeft: "5px",
              }}
            >
              {"quizzes, assignments, final project"}
            </Typography>
          </Stack>
          <Stack
            flexDirection={"row"}
            alignSelf={"flex-start"}
            alignContent={"center"}
            alignItems={"center"}
          >
            <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1.2em",
                color: "#333333",
              }}
            >
              Certification :
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "1em",
                color: "#333333",
                marginLeft: "5px",
              }}
            >
              {"None"}
            </Typography>
          </Stack>
          <Typography
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: "1.4em",
              my: "10px",
              color: "#333333",
            }}
          >
            Comments
          </Typography>
          <Stack 
            flexDirection={"column"}
            gap={'10px'}
          >
            <Comment user={'user-name 1'} cmnt={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint minima placeat eaque delectus, cum rerum autem consequatur illo sequi quaerat commodi quas praesentium, officiis culpa! Molestiae voluptatum doloremque ab?'} />
            <Comment user={'user-name 2'} cmnt={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint minima placeat eaque delectus, cum rerum autem consequatur illo sequi quaerat commodi quas praesentium, officiis culpa! Molestiae voluptatum doloremque ab?'} />
            <Comment user={'user-name 3'} cmnt={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint minima placeat eaque delectus, cum rerum autem consequatur illo sequi quaerat commodi quas praesentium, officiis culpa! Molestiae voluptatum doloremque ab?'} />
          </Stack>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2vh",
          }}
        >
          <Button
            sx={{
              width: "13vw",
              height: "6vh",
              fontFamily: '"Open Sans", sans-serif',
              fontSize: "1em",
              marginTop: "20px",
              bgcolor: "#2cccc4",
              color: "whitesmoke",
              "&:hover": {
                bgcolor: "#20a19a",
                transition:
                  "background-color 0.3s ease, color 0.3s ease, transform 0.3s ease",
              },
              borderRadius: "10px",
            }}
          >
            Apply Now
          </Button>
          <Button
            sx={{
              width: "13vw",
              height: "6vh",
              fontFamily: '"Open Sans", sans-serif',
              fontSize: "1em",
              bgcolor: "white",
              color: "#2cccc4",
              border: "1px solid #2cccc4",
              "&:hover": {
                bgcolor: "#20a19a",
                transition:
                  "background-color 0.3s ease, color 0.3s ease, transform 0.3s ease",
                border: "1px solid #20a19a",
                color: "whitesmoke",
              },
              borderRadius: "10px",
            }}
          >
            <BookmarkIcon />
            &nbsp;&nbsp;Save
          </Button>
          <Typography
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: "1.2em",
              color: "#333333",
              alignSelf: "flex-start",
              marginLeft: "10px",
            }}
          >
            About instructor
          </Typography>
          <Stack
            sx={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              width: "100%",
              "&:hover": {
                bgcolor: "#ededed",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              },
            }}
          >
            <AccountCircleIcon
              sx={{
                width: "85px",
                height: "65px",
                color: "#2cccc4",
              }}
            />
            <Stack
              sx={{
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: "1.1em",
                  color: "#333333",
                }}
              >
                Belhadj Med
              </Typography>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                size="small"
                readOnly
              />
            </Stack>
            <OpenInNewIcon sx={{ marginLeft: "30px", color: "#2cccc4" }} />
          </Stack>
          <Typography
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: "1em",
              color: "#333333",
              alignSelf: "flex-start",
              marginLeft: "10px",
            }}
          >
            Title/position : Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <LinkedInIcon
              sx={{
                fontSize: "35px",
                "&:hover": {
                  color: "#2cccc4",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                },
              }}
            />
            <InstagramIcon
              sx={{
                fontSize: "35px",
                "&:hover": {
                  color: "#2cccc4",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                },
              }}
            />
            <EmailIcon
              sx={{
                fontSize: "35px",
                "&:hover": {
                  color: "#2cccc4",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                },
              }}
            />
          </Box>
          <Typography
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: "1.2em",
              color: "#333333",
              alignSelf: "flex-start",
              marginLeft: "10px",
            }}
          >
            Other courses
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              gap: "20px",
              padding: "5px",
            }}
          >
            {buttonArray.map((label, index) => (
              <Button
                key={index}
                sx={{
                  padding: "5px 10px",
                  backgroundColor: "#dfdfdf",
                  borderRadius: "20px",
                  width: "fit-content",
                  color: "black",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#ededed",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Stack>
      </Box>
    </Dialog>
  );
}
