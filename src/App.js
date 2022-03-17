import "./styles/App.css";
import Homepage from "./pages/Homepage.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from "./pages/Products";
import Mockman from 'mockman-js'
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/mock" element={<Mockman />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
