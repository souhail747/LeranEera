/* eslint-disable no-unused-vars */

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

export default function BigCard() {
  return (
    <Dialog
      open={true}
      PaperProps={{
        sx: {
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
          maxWidth: "100%",
          width: { md: "65vw", xs: "75vw" },
          height: { md: "100vh", xs: "80vh" },
          bgcolor: "white",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "row",
          overflow:"hidden"
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          bgcolor: "#90e0ef",
        }}
      >
        <img
          width={"100%"}
          height={"30%"}
          src="./src/Images/Bigreact.png"
          alt=""
        />
        <Stack
          flexDirection={"row"}
          sx={{
            justifyContent: "space-between",
            height: "70%",
            width: "100%",
          }}
        >
          {/* Stack for the card details  */}
          <Stack 
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              height: "100%",
              width: "100%",
            }}
            >
   
            <Typography variant="h4">
            ReactJs advanced Course
            </Typography>
            <Typography sx={{alignSelf:"flex-start",}} >
              ReactJs advanced Course
            </Typography>

          </Stack>
          <Card sx={{ my:"-0.27em", width: "50%", height: "100%",bgcolor:"#00b4d8" }}>souhail</Card>
        </Stack>
      </Box>
    </Dialog>
  );
}
