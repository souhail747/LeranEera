import { Box } from "@mui/material";
import Link from '@mui/material/Link';


function Tbox ({number, title, text}) {
    return (
        <Box
        sx={{
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
            width:"202px",
            height:"285px",
            background: "linear-gradient(180deg, rgba(255,255,255,1) 5%, rgba(224,229,235,1) 100%)",
            margin: "0",
            padding: "30px",
            display : "flex",
            flexDirection : "column",
        }}
        >
            <h2
            style={{
                width:"70px",
                background: "linear-gradient(180deg, rgba(71,138,201,1) 0%, rgba(71,138,201,1) 41%, rgba(44,204,196,1) 100%)",
                color:"white",
                fontFamily: '"Oswald", sans-serif',
                fontWeight: "500",
                fontSize : "48px",
                borderRadius:"50px",
                textAlign: 'center',
            }}
            >{number}</h2>
            <h5
            style={{              
                fontFamily: '"Roboto", sans-serif',
                fontStyle: "bold",
                fontSize : "20px",
                marginTop:"20px",
                textAlign:"left",
                lineHeight: "1.2",
            }}
            >
            {title}
            </h5>
            <p
            style={{            
                width:"202px",  
                fontFamily: '"Open Sans", sans-serif',
                fontWeight: "400",
                fontStyle: "italic",
                fontSize : "14px",
                marginTop : "20px",
                lineHeight: "1.6",
            }}
            >
            {text}
            </p>
            <Link href="#" underline="none"
            sx={{
                width : "max-content",
                height : "24px",
                fontFamily: '"Open Sans", sans-serif',
                fontWeight: "400",
                fontSize : "14px",
                marginTop : "20px",
                color : "black",
                borderBottom : "2px solid #478ac9",
                lineHeight: "1.4",
                letterSpacing : "1",
                
            }}
            >
                {'LEARN MORE'}
            </Link>
        </Box>
    );
        
}
export default Tbox