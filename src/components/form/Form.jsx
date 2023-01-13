import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { TextField, Box, Typography, Button } from "@mui/material";

const Form = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({ name: "", phone: "", email: "" });

  const total = getTotalPrice();

  const handleSubmit = (event) => {
    event.preventDefault();

    const order = {
      buyer: userData,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then((res) => setOrderId(res.id));

    cart.map((product) =>
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );

    clearCart();
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{color:"#12381e"}}
        >
        El TOTAL es: ${total}.-
      </Typography>

      <div>
        <form action="" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Ingresa tu nombre"
            placeholder="José Miglone"
            id="Nombre"
            type="text"
            color="warning"
            name="name"
            value={userData.name}
            onChange={(event) =>
              setUserData({ ...userData, name: event.target.value })
            }
          />
          <TextField
            fullWidth
            label="Ingresa tu teléfono"
            id="Teléfono"
            type="text"
            color="warning"
            placeholder="+54 911 44562586"
            name="phone"
            onChange={(event) =>
              setUserData({ ...userData, phone: event.target.value })
            }
            value={userData.phone}
          />
          <TextField
            fullWidth
            label="Ingrese tu email"
            placeholder="jose@abc.com"
            id="fullWidth"
            type="email"
            color="warning"
            name="email"
            onChange={(event) =>
              setUserData({ ...userData, email: event.target.value })
            }
            value={userData.email}
          />
          <Button variant="contained" color="success" type="submit">
            Finalizar compra
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default Form;
