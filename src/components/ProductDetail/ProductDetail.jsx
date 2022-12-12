import styles from "./ProductDetail.module.css";

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const ProductDetail = ({ product }) => {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 44, color: "#dbdebf", textAlign: "left" }}
          gutterBottom
        >
          {product.name}
        </Typography>
        <Typography
          sx={{ color: "#dbdebf", textAlign: "left" }}
          variant="body1"
        >
          {product.description}
        </Typography>
        <br />
        <Typography
          sx={{ fontSize: 33, color: "#dbdebf", textAlign: "left" }}
          gutterBottom
        >
          $ {product.price}.-
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="medium"
          endIcon={<ShoppingBasketIcon />}
          href="/Cart"
        >
          COMPRAR
        </Button>
      </CardActions>
    </React.Fragment>
  );

  return (

    <div className={styles.imgs}>
      <ImageList cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined" sx={{ bgcolor: "#12381e", color: "#dbdebf" }}>
          {card}
        </Card>
      </Box>
    </div>
  );
};

const itemData = [
  {
    img: "https://res.cloudinary.com/drl62fylt/image/upload/v1670800796/velaII_faahd1.jpg",
    title: "Helios",
  },
  {
    img: "https://res.cloudinary.com/drl62fylt/image/upload/v1670800711/mood_rfmqec_a3094a_164624.jpg",
    title: "Hermes",
  },
  {
    img: "https://res.cloudinary.com/drl62fylt/image/upload/v1670800665/velaI_liy7b7_56b40e.jpg",
    title: "Ritual I",
  },
  {
    img: "https://res.cloudinary.com/drl62fylt/image/upload/v1670800829/verdeII_viqlsw.jpg",
    title: "Ancestral I",
  },
  {
    img: "https://res.cloudinary.com/drl62fylt/image/upload/v1670800802/velaIII_nccnpr.jpg",
    title: "Vela I",
  },
  {
    img: "https://res.cloudinary.com/drl62fylt/image/upload/v1670800823/verdeI_xbt9ge.jpg",
    title: "Ancestral II",
  },
  {
    img: "https://res.cloudinary.com/drl62fylt/image/upload/v1670800807/velaIV_xpy5s3.jpg",
    title: "Ritual III",
  },
  {
    img: "https://res.cloudinary.com/drl62fylt/image/upload/v1670800812/velaV_nlrvp3.jpg",
    title: "VEla II",
  },
  {
    img: "https://res.cloudinary.com/drl62fylt/image/upload/v1670800817/velaVI_epvwcv.jpg",
    title: "Riutal II",
  },
];

export default ProductDetail;
