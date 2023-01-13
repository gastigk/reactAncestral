import * as React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";
import { styled } from "@mui/material/styles";
import { Grid, 
        Paper,
        Button,
        Typography,
        ButtonBase } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const CartItem = ({ item }) => {
  const { deleteProductById } = useContext(CartContext);

  return (
    <Paper
      className="cart-item"
      sx={{
        p: 2,
        margin: "auto",
        maxHeight: "300px",
        flexGrow: 1,
        backgroundColor: "#EAE7B1",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="" src={item.img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                {item.name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Cant: {item.quantity}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                color="secondary"
                onClick={() => deleteProductById(item.id)}
              >
                Quitar
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              component="div"
              sx={{ margin: "25px", color: "black" }}
            >
              $ {item.price}.-
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CartItem;
