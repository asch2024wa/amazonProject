import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import LandingPage from "./Pages/LandingPage";
import SignUp from "./Pages/Auth/SignUp";
import Cart from "./Pages/Cart/Cart";
import Orders from "./Pages/Orders/Orders";
import Payment from "./Pages/Payment/Payment";
import Results from "./Pages/Results/Results";
import CarouselEffect from "./components/Carousel/CarouselEffect";
// import ProductDetail from "./Pages/ProductDetail/ProductDetail";
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route Path="/" element={<LandingPage />} /> */}
          <Route path="/" element={<LandingPage />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/auth" element={<SignUp />} />

          <Route path="/orders" element={<Orders />} />

          <Route path="/payment" element={<Payment />} />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productID" element={<ProductDetail />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
