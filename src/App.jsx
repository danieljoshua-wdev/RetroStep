import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import Bestsellers from "./pages/Bestsellers";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CollectiblesLabubu from "./pages/CollectiblesLabubu";
import NewArrivals from "./pages/NewArrivals";
import Adidas from "./pages/Adidas";
import Nike from "./pages/Nike";
import OnitsukaTiger from "./pages/OnitsukaTiger";
import OnCloud from "./pages/OnCloud";
import AirJordan from "./pages/AirJordan";
import NewBalance from "./pages/NewBalance";
import OtherBrands from "./pages/OtherBrands";
import Sale from "./pages/Sale"; 
import SearchOverlay from "./components/Search/SearchOverlay";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";


function App() {
  return (
    <>
      <Navbar />
	  <SearchOverlay />
	  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />

        {/* Category Pages */}
        <Route path="/collectibles/labubu" element={<CollectiblesLabubu />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/adidas" element={<Adidas />} />
        <Route path="/nike" element={<Nike />} />
        <Route path="/onitsuka-tiger" element={<OnitsukaTiger />} />
        <Route path="/on-cloud" element={<OnCloud />} />
        <Route path="/air-jordan" element={<AirJordan />} />
        <Route path="/new-balance" element={<NewBalance />} />
        <Route path="/other-brands" element={<OtherBrands />} />
        <Route path="/sale" element={<Sale />} />
		<Route path="/product/:id" element={<ProductDetail />} />
		<Route path="/bestsellers" element={<Bestsellers />} />
		<Route path="/login" element={<Login />} />
		<Route path="/checkout" element={<Checkout />} />
		<Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
