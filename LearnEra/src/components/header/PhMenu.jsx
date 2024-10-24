import { Box, Stack } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
function PhMenu () {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    const toggleDrawer =
    (anchor, open) =>
      (event) => {
        if (
          event.type === 'keydown' &&
          ((event.key) === 'Tab' ||
            (event.key) === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };
    return (
        <Box
            sx={{
                position:'absolute',
                height:'100%',
                width:'100%',
                display:'flex',
                flexDirection:'column',
                
            }}
        >
            <Box
                sx={{
                    height:'10vh',
                    width:'100%',
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    borderBottom : '2px solid rgba(103, 103, 103, 0.114)'
                }}
            >
                <img width="200px" height="50vh" src="./src/Images/a.png" alt=""
                    style={{
                        margin : "auto",
                    }}
                />
                <IconButton 
                sx={{ ":hover": { rotate: "360deg", transition: "0.3s", color: "#2cccc4" },
                position: "absolute",  
                top: '2vh',
                right: '5px'
                }} 
                onClick={toggleDrawer("top", false)
                }>
                    <CloseIcon
                        sx={{
                            width:'30px',
                            height:'30px',
                        }}
                    />
                </IconButton>
            </Box>
            <Stack>
                <Link href="#" underline="hover"
                    sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "16px",
                        color:"#333333",
                        margin : "3vh 0 0 3vw",
                    }}
                    >
                    {'Explore'}
                    </Link>
                <Link href="#" underline="hover"
                    sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "16px",
                        color:"#333333",
                        margin : "3vh 0 0 3vw",
                    }}
                    >
                    {'For business'}
                    </Link>
                <Link href="#" underline="hover"
                    sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "16px",
                        color:"#333333",
                        margin : "3vh 0 0 3vw",
                    }}
                    >
                    {'For Governments'}
                    </Link>
                <Link href="#" underline="hover"
                    sx={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "16px",
                        color:"#333333",
                        margin : "3vh 0 0 3vw",
                    }}
                    >
                    {'For Universities'}
                    </Link>
            </Stack>
            <Stack
                sx={{
                    position:'absolute',
                    bottom:0,
                    width:'100%',
                    height:'20vh',
                    borderTop :'3px solid rgba(103, 103, 103, 0.114)',
                    bgcolor: 'whitesmoke'
                }}
            >
            <Button variant="contained"
                    sx={{
                        width: "90%",
                        height: "46px",
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "16px",
                        margin : "auto",
                        bgcolor: "#2cccc4",
                    }}
                    >
                    Join for free
                </Button>
                <Button variant="contained"
                    sx={{
                        width: "90%",
                        height: "46px",
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "16px",
                        margin : "auto",
                        color:'#2cccc4',
                        backgroundColor:'white',
                        border : '1px solid #2cccc4'
                    }}
                    >
                    Log in
                </Button>
            </Stack>
        </Box>
    );
}
export default PhMenu