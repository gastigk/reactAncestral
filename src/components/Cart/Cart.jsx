import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../carItem/CartItem";
import NoInfo from "../noInfo/NoInfo";
import Form from "../form/Form";
import "./Cart.css";
import Swal from "sweetalert2";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Button,
         Accordion,
         AccordionSummary,
         AccordionDetails,
         Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);

  const [buy, setBuy] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const [order, setOrder] = useState({});

  const openForm = () => {
    if (cart.length > 0) {
      setBuy(true);
    } else {
      alert("no se puede comprar la nada");
    }
  };

  useEffect(() => {
    if (orderId) {
      const orderCollection = collection(db, "orders");
      const ref = doc(orderCollection, orderId);

      getDoc(ref).then((res) => {
        setOrder({
          id: res.id,
          ...res.data(),
        });
      });
    }
  }, [orderId]);

  const limpiar = () => {
    Swal.fire({
      title: "¿Quieres borrar la información?",
      icon: "warning",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Sí",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Carrito vacío", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("Puedes seguir comprando", "", "info");
      }
    });
  };

  if (orderId) {
    return (
      <div className="cart-container">
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>La orden de compra es</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{orderId}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <Typography variant="h3" sx={{ color: "#12381e" }}>
          GRACIAS POR SU COMPRA
        </Typography>

        <Button
          variant="contained"
          color="warning"
          disableElevation
          href="/"
          sx={{ margin: "90px" }}
        >
          Volver a la tienda
        </Button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="container-items">
        {cart.map((item) => (
          <CartItem item={item} key={item} />
        ))}

        {cart.length < 1 && <NoInfo />}
      </div>
      <div className="cart-info">
        {buy ? (
          <Form
            cart={cart}
            getTotalPrice={getTotalPrice}
            setOrderId={setOrderId}
            clearCart={clearCart}
          />
        ) : (
          cart.length > 0 && (
            <div className="btn-cart">
              <Button variant="outlined" color="error" onClick={openForm}>
                Comprar
              </Button>
              <Button
                onClick={() => limpiar()}
                variant="outlined"
                color="secondary"
                startIcon={<DeleteIcon />}
              >
                Vaciar carrito
              </Button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Cart;
