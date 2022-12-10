import "./CartWidget.css"
import {Link} from "react-router-dom"
import {GiCandleSkull} from "react-icons/gi";

export const CartWidget = () => {
  return (
    <div className="container-cart">
      <Link to="/cart">
        <GiCandleSkull
         style={{
            fontSize: "4rem",
           color: "#69795e",
          }}
        />
        <div className="cart-counter">
          <span className="counter">13</span>
        </div>
      </Link>
    </div>
  );
};
