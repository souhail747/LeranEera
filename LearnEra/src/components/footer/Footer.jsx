import { Box, Link, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import "./styles.css";
import React from "react";
function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "#1F2937",
        paddingTop: "30px",
        flexWrap: "wrap",
      }}
    >
      <Stack
        sx={{
          flexDirection: "column",
          gap: "10px",
          width: "25%",
          alignItems: "center",
        }}
      >
        <h1 className="title">SomeText</h1>
        <Link sx={{        textDecoration: 'none',
        fontFamily: '"Lato", sans-serif',
        fontSize : '18px',
        color: '#6B7280' ,              "&:hover": {
          color: "whitesmoke",}
        }} href="#">
                    {'SomeText'}
                    </Link>
        <Link sx={{        textDecoration: 'none',
        fontFamily: '"Lato", sans-serif',
        fontSize : '18px',
        color: '#6B7280',              "&:hover": {
          color: "whitesmoke",} }} href="#">
                    {'SomeText'}
                    </Link>
        <Link sx={{        textDecoration: 'none',
        fontFamily: '"Lato", sans-serif',
        fontSize : '18px',
        color: '#6B7280',              "&:hover": {
          color: "whitesmoke",} }} href="#">
                    {'SomeText'}
                    </Link>
        <Link sx={{        textDecoration: 'none',
        fontFamily: '"Lato", sans-serif',
        fontSize : '18px',
        color: '#6B7280' ,              "&:hover": {
          color: "whitesmoke",}}} href="#">
                    {'SomeText'}
                    </Link>

      </Stack>
      <Stack
        sx={{
          flexDirection: "column",
          gap: "10px",
          width: "25%",
          alignItems: "center",
        }}
      >
        <h1 className="title">SomeText</h1>
        <Link sx={{        textDecoration: 'none',
        fontFamily: '"Lato", sans-serif',
        fontSize : '18px',
        color: '#6B7280' ,              "&:hover": {
          color: "whitesmoke",}}} href="#">
                    {'SomeText'}
                    </Link>
        <Link sx={{        textDecoration: 'none',
        fontFamily: '"Lato", sans-serif',
        fontSize : '18px',
        color: '#6B7280',              "&:hover": {
          color: "whitesmoke",} }} href="#">
                    {'SomeText'}
                    </Link>
        <Link sx={{        textDecoration: 'none',
        fontFamily: '"Lato", sans-serif',
        fontSize : '18px',
        color: '#6B7280' ,              "&:hover": {
          color: "whitesmoke",}}} href="#">
                    {'SomeText'}
                    </Link>
        <Link sx={{        textDecoration: 'none',
        fontFamily: '"Lato", sans-serif',
        fontSize : '18px',
        color: '#6B7280',              "&:hover": {
          color: "whitesmoke",} }} href="#">
                    {'SomeText'}
                    </Link>
      </Stack>
      <Stack
        sx={{
          flexDirection: "column",
          gap: "10px",
          width: "25%",
          alignItems: "center",
        }}
      >
        <h1 className="title">SomeText</h1>
        <Link sx={{        textDecoration: 'none',
        fontFamily: '"Lato", sans-serif',
        fontSize : '18px',
        color: '#6B7280',              "&:hover": {
          color: "whitesmoke",} }} href="#">
                    {'SomeText'}
                    </Link>
        <Link sx={{        textDecoration: 'none',
        fontFamily: '"Lato", sans-serif',
        fontSize : '18px',
        color: '#6B7280',              "&:hover": {
          color: "whitesmoke",} }} href="#">
                    {'SomeText'}
                    </Link>
        <Link sx={{        textDecoration: 'none',
        fontFamily: '"Lato", sans-serif',
        fontSize : '18px',
        color: '#6B7280',              "&:hover": {
          color: "whitesmoke",} }} href="#">
                    {'SomeText'}
                    </Link>
        <Link sx={{        textDecoration: 'none',
        fontFamily: '"Lato", sans-serif',
        fontSize : '18px',
        color: '#6B7280',              "&:hover": {
          color: "whitesmoke",} }} href="#">
                    {'SomeText'}
                    </Link>
      </Stack>
      <Stack
        sx={{
          flexDirection: "column",
          gap: "10px",
          width: "25%",
          alignItems: "center",
        }}
      >
        <h1 className="title">SomeText</h1>
        <Link sx={{        textDecoration: 'none',
        fontFamily: '"Lato", sans-serif',
        fontSize : '18px',
        color: '#6B7280' ,              "&:hover": {
          color: "whitesmoke",}}} href="#">
                    {'SomeText'}
                    </Link>
        <Link sx={{        textDecoration: 'none',
        fontFamily: '"Lato", sans-serif',
        fontSize : '18px',
        color: '#6B7280',              "&:hover": {
          color: "whitesmoke",} }} href="#">
                    {'SomeText'}
                    </Link>
        <Link sx={{        textDecoration: 'none',
        fontFamily: '"Lato", sans-serif',
        fontSize : '18px',
        color: '#6B7280',              "&:hover": {
          color: "whitesmoke",} }} href="#">
                    {'SomeText'}
                    </Link>
        <Link sx={{        textDecoration: 'none',
        fontFamily: '"Lato", sans-serif',
        fontSize : '18px',
        color: '#6B7280',              "&:hover": {
          color: "whitesmoke",} }
        } href="#">
                    {'SomeText'}
                    </Link>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          py: "20px",
          px: "20px",
          bgcolor: "#374151",
          marginTop: "35px",
        }}
      >
        <Typography color="#6B7280">© 2024 Learnera™</Typography>
        <Stack
          sx={{
            marginLeft: "auto",
            width: "250px",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FacebookIcon
            sx={{
              color: "#6B7280",
              "&:hover": {
                color: "whitesmoke",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              },
            }}
            fontSize="large"
          />
          <InstagramIcon
            sx={{
              color: "#6B7280",
              "&:hover": {
                color: "whitesmoke",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              },
            }}
            fontSize="large"
          />
          <XIcon
            sx={{
              color: "#6B7280",
              "&:hover": {
                color: "whitesmoke",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              },
            }}
            fontSize="large"
          />
          <GitHubIcon
            sx={{
              color: "#6B7280",
              "&:hover": {
                color: "whitesmoke",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              },
            }}
            fontSize="large"
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default Footer;
