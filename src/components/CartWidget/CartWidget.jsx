import { useContext } from "react";
import { Link } from "react-router-dom";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="containerCart">
      <Link to="/cart">
        <ShoppingCartIcon
          sx={{
            fontSize: "2rem",
            color: "#69795e",
          }}
        />

        <div className="bubble-counter">
          <span sx={{ color: "#69795e" }}>{cart.length}</span>
        </div>
      </Link>
    </div>
  );
};
