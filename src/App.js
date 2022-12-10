import NavBar from "./components/NavBar/NavBar"
import ProductListContainer from "./components/ProductListContainer/ProductListContainer"
import ProductDetailContainer from "./components/ProductDetailContainer/ProductDetailContainer"
import {Error} from "./components/Error/Error"
import {CartWidget} from "./components/CartWidget/CartWidget"

import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {

  // creación del ruteo
  return (

    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path="/" element={<ProductListContainer />} />
        <Route path="/Category/:categoryName" element={<ProductListContainer />} />
        <Route path="/ProductDetail/:id" element={<ProductDetailContainer />} />
        <Route path="/Cart" element={<CartWidget />} />
        <Route path="*" element={<Error />} />

      </Routes>

    </BrowserRouter>
  );

}

export default App;