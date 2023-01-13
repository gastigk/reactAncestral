import * as React from "react";

import { Stack, LinearProgress, Box } from "@mui/material";

function LinearColor() {
  return (
    <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
      <LinearProgress color="success" />
      <Box
      sx={{
        height: "70vh",
        backgroundColor: "#FFFFFF",
      }}
      />
    </Stack>
  );
}

export default LinearColor;
