// @ts-nocheck
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "@mui/material/Link";
import Rating from "@mui/material/Rating";
// eslint-disable-next-line react/prop-types
export default function ActionAreaCard({ img, /* desc */ cat,formater }) {
  return (
    <Card
      sx={{
        maxWidth: 550,
        maxHeight: 350,
        width: "200px",
        height: "200px",
        /*         margin:'100px auto',
tawa howa bch ykoun f blasa o5ra 3lch ta3ti f zok oma f margin ta3bt
 */ transition: "0.5s ease",
        "&:hover": {
          transform: "scale(1.1)",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="80" image={img} alt="green iguana" />
        <CardContent
          sx={{
            margin: "0",
            padding: "0",
            p:"12px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap:0.1
            
          }}
        >
          <Typography
            gutterBottom
            component="div"
            sx={{ margin: 0, fontSize: "1.5em" }}
          >
            {" "}
            React full course
          </Typography>
          <Rating   sx={{fontSize:"1.5em"}} name="read-only" value={5} readOnly />
          <Link
            href="#"
            underline="hover"
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              fontSize: "0.9em",
              width: "max-content",
              display: "block",
              marginBottom: "10px",
            }}
          >
            {formater}
          </Link>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {cat}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
