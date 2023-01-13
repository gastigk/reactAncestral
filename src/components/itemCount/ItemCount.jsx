import { useEffect, useState } from "react";
import { Typography, Box, Button, ButtonGroup } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";

const ItemCount = ({ stock, initial = 0, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexDirection: "column",
      }}
    >
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button
          onClick={increment}
          variant="contained" 
          color="warning"
          sx={{ bgcolor:"#dbdebf", color:"#12381e" }}
        >+</Button>
        <Button
          onClick={decrement}
          variant="contained" 
          color="warning"
          sx={{ bgcolor:"#dbdebf", color:"#12381e" }}
        >-</Button>
      </ButtonGroup>

      <AutoFixNormalIcon fontSize="large" />

      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mr: 3,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          textDecoration: "none",
          color: "#dbdebf"
        }}
      >
        <h5>Cantidad: {counter}</h5>
      </Typography>

      {counter > 0 && (
        <Button
          variant="contained"
          size="small"
          onClick={() => onAdd(counter)}
          endIcon={<ShoppingBasketIcon />}
          color="warning"
          sx={{ bgcolor:"#dbdebf", color:"#12381e" }}
        >
          Agregar al carrito
        </Button>
      )}
    </Box>
  );
};

export default ItemCount;
