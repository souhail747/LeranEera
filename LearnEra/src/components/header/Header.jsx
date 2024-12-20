import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import PhMenu from "./PhMenu";
import Login from "../Login";
import Signup from "../Signup/Signup";


const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),

  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));


export default function Header() {

  const [log, setlog] = useState(false);
  const openlog = () => {
    setlog(true);
  };

  const [sign, setsign] = useState(false);
  const opensign = () => {
    setsign(true);
  };

  const [first, setfirst] = useState(false);
  const handleMenu = () => {
    setfirst(true);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Box
      component="header"
      
      sx={{
     padding: "10px",
      height:"7vh"
,        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <IconButton onClick={handleMenu}  sx={{ display: { xs: "blcok", md: "none" } }}>
      <MenuIcon />
      </IconButton>
      {/* Link from react */}
     
      <img width="200px" height="50vh" src="./src/Images/a.png" alt="Logo" />
      
     <Search
        sx={{
          display: { xs: "none", md: "flex" },

          alignItems: "center",
          color: "black",
          bgcolor: "#e9ecef",
          borderRadius: "50px",
          border: "1px solid black",
          "& .MuiInputBase-input": {
            width: "30vw",
          },
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          sx={{ color: "black" }}
          placeholder="Search For Courses"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Stack
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          gap: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Categories
          </Button>
          <Menu
            sx={{
              "& .MuiMenu-paper": {
                marginTop: "35px",
              },
            }}
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
        <Box
          component="button"
          sx={{ color: "#333333", "&:hover": { color: "#2c7da0" } }}
        >
          <LocalGroceryStoreIcon />
        </Box>
        <Stack sx={{ gap: "8px", flexDirection: "row" }}>
          <Button
            onClick={openlog}
            sx={{
              bgcolor: " #219ebc",
              display: { xs: "none", md: "block" },
              color: "black",
              padding: "10px",
              width: "7vw",
              textAlign:'center'
            }}
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            Log In
          </Button>
          {log && <Login setlog={setlog} setsign={setsign} />}
          <Button
            onClick={opensign}
            sx={{
              display: { xs: "none", md: "block" },

              bgcolor: " #219ebc",
              color: "black",
              padding: "10px",
              width: "7vw",
              textAlign:'center'
            }}
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            Sign Up
          </Button>
          {sign && <Signup setlog={setlog} setsign={setsign} />}
        </Stack>
      </Stack>
      <IconButton sx={{ display: { xs: "blcok", md: "none" } }}>
        <SearchIcon />
      </IconButton>
    </Box>
           { first &&  <PhMenu setfirst={setfirst} setsign={setsign} setlog={setlog} /> }            
    </>
  );
}
