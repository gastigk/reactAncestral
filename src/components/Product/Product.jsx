import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Counter from "../ProductCount/ProductCount";

const Product = ({ element }) => {
  return (
    <Card sx={{ minWidth: 330, maxWidth: 345, maxHeight: 330, maxHeight: 445 }}>
      <CardMedia component="img" height="140" image={element.img} />
      <CardContent>
        <Typography gutterBottom align="center" variant="h4" component="div">
          <Link
            to={`/ProductDetail/${element.id}`}
            style={{ textDecoration: "none", color: "#12381e" }}
          >
            {element.name}
          </Link>
        </Typography>
        <Typography align="center" variant="body1" color="text.secondary">
          {element.description}
        </Typography>
        <Typography align="center" variant="h5" color="text.secondary">
          $ {element.price}.-
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Counter>
          <Button
            variant="contained"
            size="medium"
            endIcon={<ShoppingBasketIcon />}
          ></Button>
        </Counter>
      </CardActions>
    </Card>
  );
};

export default Product;
