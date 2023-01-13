import { Link } from "react-router-dom";
import { Button, 
        Card, 
        CardActions, 
        CardContent, 
        CardMedia, 
        Typography,} from "@mui/material";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const Item = ({ element }) => {
  return (
    <Card sx={{ maxWidth: 345, bgcolor: "#12381e" }}>
      <CardMedia
        component="img"
        height="100%"
        image={element.img}
        alt="productos"
      />
      <CardContent>
        <Link
          to={`/ItemDetail/${element.id}`}
          style={{ textDecoration: "none",}}
        >
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            color= "#dbdebf"
            align="center"
          >
            {element.name}
          </Typography>
        </Link>
      </CardContent>

      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link
          to={`/itemDetail/${element.id}`}
          style={{ textDecoration: "none" }}
        >
          <Button 
          size="large" 
          variant="contained"
          endIcon={<AutoGraphIcon sx={{ color: "#12381e" }}/>}
          color="warning"
          sx={{ bgcolor:"#dbdebf", color:"#12381e" }}
          >
            quiero saber más
          </Button>

        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
