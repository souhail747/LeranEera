import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link, Rating, Stack } from '@mui/material';
import { Block } from '@mui/icons-material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345,
        margin:'100px auto',
        transition: '0.5s ease',
        "&:hover" : {
            transform: 'scale(1.1)',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)',
        }
     }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./src/Images/react.png"
          alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">React full course</Typography>
            <Rating name="read-only" value={5} readOnly />
            <Link href="#" underline="hover"
            sx={{
                fontFamily: '"Open Sans", sans-serif',
                fontSize : "0.9em",
                width : "max-content",
                display:'block',
                marginBottom:'10px'
            }}
            >
            {'Ben Hamed Souhail'}
            </Link>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}