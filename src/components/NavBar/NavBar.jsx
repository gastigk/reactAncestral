import * as React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

const pages = ["Productos", "Velas", "Rituales"];
const settings = ["Perfil", "Carrito", "Mis compras", "Logout"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#12381e" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AutoFixHighIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 2,
              fontSize: "large",
            }}
          />
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
            ANCESTRAL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              style={{ textDecoration: "none" }}
              key="Rituales"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "#dbdebf", display: "block" }}
              href="/"
            >
              {pages[0]}
            </Button>
            <Button
              style={{ textDecoration: "none" }}
              key="Rituales"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "#dbdebf", display: "block" }}
              href="/category/velas"
            >
              {pages[1]}
            </Button>
            <Button
              style={{ textDecoration: "none" }}
              key="Rituales"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "#dbdebf", display: "block" }}
              href="/category/rituales"
            >
              {pages[2]}
            </Button>
          </Box>

          <CartWidget />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{ bgcolor: "#dbdebf" }}
                  alt="Remy Sharp"
                  src="/broken-image.jpg"
                />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
