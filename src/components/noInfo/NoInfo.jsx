import * as React from "react";
import { Alert, Box, Button } from "@mui/material"

const NoInfo = () => {
  
  return (
    <Box >
      <Alert severity="warning">
        Selecciona tu producto favorito al carrito 👍
      </Alert>
      <Button
        variant="contained"
        color= "warning"
        disableElevation
        href="/"
        sx={{ margin: "90px" }}
      >
        Volver a la tienda
      </Button>
    </Box>
  );
};

export default NoInfo;
