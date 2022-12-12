import { useState } from "react";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Counter = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial);

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  const onAdd = (quantity) => {
    return quantity;
  };

  return (
    <Box>
      <Typography
        variant="h4"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 3,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          textDecoration: "none",
          color: "#dbdebf",
        }}
      >
        {counter}

        </Typography>

      <Button sx={{ onClick: { increment } }} variant="text" size="small">
        +
      </Button>

      <Button sx={{ onClick: { decrement } }} variant="text" size="small">
        -
      </Button>

      <Button
        sx={{ onClick: { decrement } }}
        variant="contained"
        size="small"
        endIcon={<ShoppingBasketIcon />}
      >
        COMPRAR
      </Button>

    </Box>
  );
};

export default Counter;
