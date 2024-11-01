import { Box, Stack, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


export default function Comment({user,cmnt}) {
    return (
        <Box sx={{display:'flex',
            flexDirection : "column",
            alignContent:'center',
            alignItems:'center',
            bgcolor : '#dfdfdf',
            borderRadius:'20px',
            gap:'5px',
            width : '30vw',
            padding:'10px'
        }}>
            <Stack
                        flexDirection={"row"}
                        alignSelf={"flex-start"}
                        alignContent={"center"}
                        alignItems={"center"}>
            <AccountCircleIcon sx={{width:'65px', height:'45px'}} />
            <Typography>{user}</Typography>
            </Stack>
            <Typography
                          sx={{
                            fontFamily: '"Open Sans", sans-serif',
                            fontSize: "1em",
                            marginLeft: "10px",
                            alignSelf: "flex-start",
                            color: "#333333",
                          }}
            >{cmnt}</Typography>
        </Box>
    );
}