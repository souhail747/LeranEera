import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// eslint-disable-next-line react/prop-types
function PhMenu ({setfirst,setsign,setlog}) {
    const handleMenu = () => {

        setfirst(false)
    
      };
      const openSignup = () => {

        setsign(true)    
      };
      const openLogin = () => {

        setlog(true)    
      };
      
      const handleSignup =() => {
        handleMenu();
        openSignup();
      }
      const handleLogin =() => {
        handleMenu();
        openLogin();
      }
    
    return (
        <Dialog
        open={true}
        fullScreen
            sx={{
                height:'100%',
                width:'100%',
                display:'flex',
                flexDirection:'column',
       
                maxHeight:"100%",
                maxWidth:"100%",
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
                right: '15px'
                }} 
                onClick={  handleMenu
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
            <Button variant="contained" onClick={handleSignup}
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
                <Button variant="contained" onClick={handleLogin}
                    sx={{
                        width: "90%",
                        height: "46px",
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "16px",
                        margin : "auto",
                        color:'#2cccc4',
                        textAlign:"center"
,                        backgroundColor:'white',
                        border : '1px solid #2cccc4'
                    }}
                    >
                    Log in
                </Button>
            </Stack>
        </Dialog>
    );
}
export default PhMenu