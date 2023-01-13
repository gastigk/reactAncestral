import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar,
        Box,
        Toolbar,
        Typography,
        InputBase } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#dbdebf" }}>
        <Toolbar>
          <AutoAwesomeIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              mr: 2,
              color: "#12381e",
            }}
          ></AutoAwesomeIcon>
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
              color: "#12381e",
            }}
          >
            ANCESTRAL
          </Typography>
          <Search>
            <SearchIconWrapper>
              <MarkEmailReadIcon
                sx={{
                  color: "#12381e",
                }}
              />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Suscribite"
              inputProps={{ "aria-label": "Suscribite" }}
              sx={{
                mr: 3,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                color: "#12381e",
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
