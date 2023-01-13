import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../itemCount/ItemCount";
import Swal from "sweetalert2";
import { styled } from "@mui/material/styles";
import { Grid, 
        Paper, 
        Typography, 
        ButtonBase, 
        Box} from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const ItemDetail = ({ product }) => {
  const { addToCart, getQuantityById } = useContext(CartContext);

  const onAdd = (quantity) => {
    addToCart({
      ...product,
      quantity: quantity,
    });

    const Toast = Swal.mixin({
      toast: true,
      padding: "10px",
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Agregado al carrito 😊",
      background: "#12381e",
      color: "#dbdebf",
    });
  };

  const quantity = getQuantityById(product.id);

  return (
    <Paper
      sx={{
        p: 2,
        margin: "10%",
        maxWidth: 900,
        flexGrow: 1,

        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#12381e",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 350, height: 350 }}>
            <Img alt="complex" src={product.img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                sx={{ color: "#dbdebf" }}
              >
                {product.name}
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ color: "#dbdebf" }}>
                {product.description}
              </Typography>
            </Grid>
            <Box>
              <ItemCount
                onAdd={onAdd}
                stock={product.stock}
                initial={quantity}
              />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="div" sx={{ color: "#dbdebf" }}>
              $ {product.price}.-
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ItemDetail;
