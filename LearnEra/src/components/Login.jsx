import { Box, Dialog } from "@mui/material";
import  AccountCircleIcon  from "@mui/icons-material/AccountCircle";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';




function Login ({setlog}) {
    const handleClose = () => {
        setlog(false);
    }
    return (
        <Dialog open={true}
        onClose={handleClose} 
        PaperProps={{sx:{
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
            width : "452px",
            height : "625px",
            bgcolor : "white",
            padding : "0 20px 0 20px",
            borderRadius : "50px",
            display : "flex",
            flexDirection : "column",

        }}}>

            <AccountCircleIcon
            sx={{
                margin : "5px auto 0 auto",
                width: "108px",
                height: "108px",
                color : "#2cccc4",
            }}
            >
            </AccountCircleIcon>
            <h3
            style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize : "30px",
                fontWeight: "700",
                lineHeight: "1.2",
                margin : "20px auto 0 auto",
            }}
            >
            Welcome Back
            </h3>
            <Box 
            sx={{
                width : "380px",
                margin : "7px auto 0 auto",
                padding : "30px",
                display : "flex",
                flexDirection : "column",
            }}
            >
                <Stack>
                    <label
                    style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "16px",
                    }}
                    >
                    Username *
                    </label>
                    <TextField id="outlined-basic" placeholder="Enter your username" size="small"  required
                    sx={{
                        marginTop : "10px",
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "16px",
                        bgcolor: "#f2f2f2",
                    }}
                    />
                </Stack>
                <Stack
                sx={{
                    marginTop : "25px",
                }}
                >
                    <label
                    style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "16px",
                    }}
                    >
                    Password *
                    </label>
                    <TextField id="outlined-password-input" placeholder="Password" type="password" autoComplete="current-password" size="small"  required
                    sx={{
                        marginTop : "10px",
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "16px",
                        bgcolor: "#f2f2f2",
                    }}
                    />
                </Stack>
                <Stack
                sx={{
                    marginTop: "20px",
                    display: "flex",
                    flexDirection : "row"
                }}
                >
                    <Checkbox>
                    </Checkbox>
                    <label
                    style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "16px",
                        marginTop : "10px"

                    }}
                    >
                    Remember me
                    </label>
                </Stack>
                <Button variant="contained"
                    sx={{
                        width: "100%",
                        height: "46px",
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "16px",
                        margin : "15px 0 10px 0",
                        bgcolor: "#2cccc4",
                    }}
                    >
                    Login
                </Button>
            </Box>
            <Link href="#" underline="hover"
            sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize : "16px",
                color:"#999999",
                width : "max-content",
                margin : "10px auto 0 auto",
            }}
            >
            {'Forgot password?'}
            </Link>
            <Link href="#" underline="hover"
            sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize : "16px",
                color:"#999999",
                width : "max-content",
                margin : "6px auto 0 auto",
            }}
            >
            {"Don't have an account?"}
            </Link>
        </Dialog> 
    );
}
export default Login