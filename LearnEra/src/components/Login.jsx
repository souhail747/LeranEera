import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import  AccountCircleIcon  from "@mui/icons-material/AccountCircle";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



// eslint-disable-next-line react/prop-types
function Login ({setlog ,setsign}) {
    const handleClose = () => {
        setlog(false);
    }
    const handleSignUp = () => {
        handleClose();
        setsign(true);
    }


    return (
        <Dialog open={true}
        onClose={handleClose} 
        PaperProps={{sx:{
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
            bgcolor : "white",
            padding : {md:"0 20px 0 20px", xs:"10px 20px 20px 20px"},
            borderRadius :"30px",
            display : "flex",
            flexDirection : "column",

        }}}>

            <AccountCircleIcon
            sx={{
                margin : "5px auto 0 auto",
                width: {md:"108px", xs:"90px"},
                height: {md:"84px", xs:"90px"},
                color : "#2cccc4",
            }}
            >
            </AccountCircleIcon>
            <h3
            style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize : "1.5em",
                fontWeight: "700",
                lineHeight: "1.2",
                margin : "20px auto 0 auto",
            }}
            >
            Welcome Back
            </h3>
            <Box 
            sx={{
                width:{md:"430px", xs:"250px", sm:"340px"},
                margin : {md:"7px auto 0 auto", xs: "0 auto" },
                paddingTop : "30px",
                display : "flex",
                flexDirection : "column",
            }}
            >
                <Stack
                    sx={{
                        marginX:"auto",
                    }}
                >
                    <label
                    style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "0.9em",
                    }}
                    >
                    Username *
                    </label>
                    <TextField id="outlined-basic" placeholder="Enter your username" size="small"  required
                    sx={{
                        width: {md:"370px", xs:"230px", sm:"300px"},
                        marginTop : "10px",
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "16px",
                        bgcolor: "#f2f2f2",
                    }}
                    />
                </Stack>
                <Stack
                sx={{
                    marginTop : {md:"25px",sm:"25px",xs:"15px"},
                    marginX:"auto",
                }}
                >
                    <label
                    style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "0.9em",
                    }}
                    >
                    Password *
                    </label>
                    <TextField id="outlined-password-input" placeholder="Password" type="password" autoComplete="current-password" size="small"  required
                    sx={{
                        width: {md:"370px", xs:"230px", sm:"300px"},
                        marginTop : "10px",
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "16px",
                        bgcolor: "#f2f2f2",
                    }}
                    />
                </Stack>
                <Stack
                sx={{
                    marginTop: {md:"20px", xs:"10px"},
                    marginLeft: {md:"20px", sm:"10px",xs:"0"},
                    display: "flex",
                    flexDirection : "row"
                }}
                >
                    <Checkbox>
                    </Checkbox>
                    <label
                    style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "0.9em",
                        marginTop : "10px"

                    }}
                    >
                    Remember me
                    </label>
                </Stack>
                <Button variant="contained"
                    sx={{
                        width: {md:"370px", xs:"210px", sm:"300px"},
                        height: {md:"46px", xs:"40px", sm:"46px"},
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "16px",
                        margin : {md: "15px auto 10px auto",sm:"15px auto 10px auto",xs:"10px auto 10px auto"},
                        bgcolor: "#2cccc4",
                    }}
                    >
                    Login
                </Button>
            </Box>
            <Link href="#" underline="hover"
            sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize : "0.9em",
                color:"#999999",
                width : "max-content",
                margin : {md: "20px auto 0 auto",sm:"15px auto 0 auto",xs:"10px auto 0 auto"}
            }}
            >
            {'Forgot password?'}
            </Link>
            <Link onClick={handleSignUp} href="#" underline="hover"
            sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize : "0.9em",
                color:"#999999",
                width : "max-content",
                margin : {md: "6px auto 20px auto",sm:"5px auto 0 auto",xs:"3px auto 0 auto"}
            }}
            >
            {"Don't have an account?"}
            </Link>
            <IconButton 
                sx={{ ":hover": { rotate: "360deg", transition: "0.3s", color: "#2cccc4" },
                position: "absolute",  
                top: '2vh',
                right: '15px',
                display:{xs:"block",sm:"block",xl:"none",s:"none",md:"none"}
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
        </Dialog> 
    );
}
export default Login