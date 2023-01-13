import { BrowserRouter, Routes, Route } from "react-router-dom"

import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/itemList/ItemListContainer";
import Navbar from "./components/navBar/NavBar"
import Cart from "./components/cart/Cart";
import CartContextProvider from "./context/CartContext";
import Form from "./components/form/Form";
import { Error }  from "./components/error/Error"

function App() {

  return (
   
    <BrowserRouter>
      <CartContextProvider>

        <Navbar />


        <Routes>

          <Route path="/" element={<ItemListContainer /> } />
          
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          
          <Route path="/itemDetail/:id" element={ <ItemDetailContainer />} />

          <Route path="/checkout" element={ <Form /> } />

          <Route path="/cart" element={ <Cart /> } />

          <Route path="*" element={<Error />} />

        </Routes>

      </CartContextProvider>
    </BrowserRouter>

  );
  
}

export default App;
