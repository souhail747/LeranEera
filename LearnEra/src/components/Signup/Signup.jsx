import { Box, Dialog } from "@mui/material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import PasswordMeterInput from "./PasswordMeterInput";




function Signup ({setsign}) {
    const handleClose = () => {
        setsign(false);
    }
    return (
        <Dialog open={true}
        onClose={handleClose} 
        PaperProps={{sx:{
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
            maxWidth : "100%",
            width : "85vw",
            height : "90vh",
            bgcolor : "white",
            padding : "0 20px 0 20px",
            borderRadius : "20px",
            display : "flex",
            flexDirection : "row",

        }}}>
            <img  src="./src/Images/sign-up.png" alt=""
                style={{
                    margin:"auto 1vw",
                    width:"40vw",
                    height:"88vh",
                }}
            />
            <Box 
            sx={{
                width : "40vw",
                margin:"auto 1.25vw",
                display : "flex",
                flexDirection : "column",
                gap:"5vh",
            }}
            >
                <Stack
                sx={{
                    display : "flex",
                    flexDirection : "row",
                    gap:"3vw",
                    margin:"auto",
                }}>
                    <TextField id="outlined-basic" label="Enter your First Name"  variant="outlined" required
                        sx={{
                            width:"16vw",
                            margin:"auto",
                            fontFamily: '"Open Sans", sans-serif',
                            fontSize : "16px",
                        }}
                    />
                    <TextField id="outlined-basic" label="Enter your Last Name"  variant="outlined" required
                        sx={{
                            width:"16vw",
                            margin:"auto",
                            fontFamily: '"Open Sans", sans-serif',
                            fontSize : "16px",
                        }}
                    />
                </Stack>
                <TextField id="outlined-basic" label="Email" type="email"  variant="outlined" required
                        sx={{
                            width:"35vw",
                            margin:"auto",
                            fontFamily: '"Open Sans", sans-serif',
                            fontSize : "16px",
                        }}
                />
                <TextField id="outlined-basic" label="Create UserName"  variant="outlined" required
                        sx={{
                            width:"35vw",
                            marginTop : "10px",
                            margin:"auto",
                            fontFamily: '"Open Sans", sans-serif',
                            fontSize : "16px",
                        }}
                />
                <PasswordMeterInput/>
                <Button variant="contained"
                    sx={{
                        width: "35vw",
                        height: "46px",
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize : "16px",
                        margin : "auto",
                        bgcolor: "#2cccc4",
                    }}
                    >
                    Sign Up
                </Button>
                <Link href="#" underline="hover"
                sx={{
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize : "16px",
                    color:"#999999",
                    width : "max-content",
                    margin : "auto",
                }}
                >
                {'already have an account?'}
                </Link>
            </Box>
        </Dialog> 
    );
}
export default Signup