import styles from "./CartWidget.module.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Filter3Icon from "@mui/icons-material/Filter3";

export const CartWidget = () => {

  return (
    <div className={styles.containerCart}>
      <Link to="/cart">
        <ShoppingCartIcon
          style={{
            fontSize: "2rem",
            color: "#69795e",
          }}
        />

        <Filter3Icon
          style={{
            color: "#69795e",
            marginBottom: "1rem"
          }}
        />
      </Link>
    </div>
  );
};
