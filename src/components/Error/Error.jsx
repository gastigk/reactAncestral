import * as React from 'react';
import styles from "./Error.module.css"
import imgError from "../../assets/error.jpg"
import Button from "@mui/material/Button";

export const Error = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

    return (
        <div className={styles.error}>
            <h2>NOT FOUND</h2>
            <img className="error__img" src={imgError} alt="error" />
            <h3>Sorry, but you are looking for something that isn't here.</h3>
            <Button
              style={{ textDecoration: "none" }}
              key="Rituales"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "#dbdebf", display: "block" }}
              href="/"
            >
              Volver al Home
            </Button>
        </div>
    );
};
