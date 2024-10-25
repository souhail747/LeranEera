import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import PasswordMeterInput from "./PasswordMeterInput";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles'
function Signup({ setsign }) {
  const handleClose = () => {
    setsign(false);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      PaperProps={{
        sx: {
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
          maxWidth: "100%",
          width: { md: "85vw", xs: "75vw" },
          height: { md: "90vh", xs: "80vh" },
          bgcolor: "white",
          padding: "0 20px 0 20px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "row",
        },
      }}
    >
      <Box
        component={"img"}
        src="./src/Images/sign-up.png"
        alt=""
        sx={{ width: "45vw", display: { xs: "none", md: "block" } }}
      />

      <Box
        sx={{
          width: { xs: "100vw", md: "40vw" },
          margin: "auto 1.25vw",
          display: "flex",
          flexDirection: "column",
          gap: { xs: "3vh", md: "5vh", sm: "3vh" },
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            gap: { xs: "3vh", md: "3vw" },
            mx: "auto",
          }}
        >
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            required
            size={isSmallScreen ? "small" : "medium" }
            sx={{
              width: { xs: "65vw", md: "16vw" },
              fontFamily: '"Open Sans", sans-serif',
              fontSize: "16px",
            }}
          />
          <TextField
            id="outlined-basic"
            label=" Last Name"
            variant="outlined"
            required
            size={isSmallScreen ? "small" : "medium" }
            sx={{
              width: { xs: "65vw", md: "16vw" },
              fontFamily: '"Open Sans", sans-serif',
              fontSize: "16px",
            }}
          />
        </Stack>
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          required
          size={isSmallScreen ? "small" : "medium" }
          sx={{
            width: { xs: "65vw", md: "35vw" },
            mx: "auto",
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "16px",
          }}
        />
        <TextField
          id="outlined-basic"
          label="Create UserName"
          variant="outlined"
          required
          size={isSmallScreen ? "small" : "medium" }
          sx={{
            width: { xs: "65vw", md: "35vw" },
            mx: "auto",
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "16px",
          }}
        />
        <PasswordMeterInput />
        <Button
          variant="contained"
          sx={{
            width: { xs: "55vw", md: "16vw" },
            height: "46px",
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "16px",
            mx: "auto",
            bgcolor: "#2cccc4",
          }}
        >
          Sign Up
        </Button>
        <Link
          href="#"
          underline="hover"
          sx={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "16px",
            color: "#999999",
            width: "max-content",
            mx: "auto",
          }}
        >
          {"already have an account?"}
        </Link>

        <IconButton 
                sx={{ ":hover": { rotate: "360deg", transition: "0.3s", color: "#2cccc4" },
                position: "absolute",  
                top: '2vh',
                right: '15px',
                display:{xs:"blcok",sm:"none",xl:"none",s:"none"}
            }} 
            onClick={ handleClose
            }>
                    <CloseIcon 
                        sx={{
                            width:'30px',
                            height:'30px',
                        }}
                        />
    </IconButton>
                       
      </Box>
    </Dialog>
  );
}
export default Signup;
