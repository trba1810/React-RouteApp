import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Product from "./Pages/Product";
import CreateProduct from "./Pages/CreateProduct";
import ProductDetails from "./Pages/ProductDetails";
import ProductList from "./Pages/ProductList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/Pages/Product" element={<Product />}></Route>
      <Route path="/Pages/ProductList" element={<ProductList />}></Route>
      <Route path="/Pages/CreateProduct" element={<CreateProduct />}></Route>
      <Route path="/Pages/ProductDetails" element={<ProductDetails />}></Route>
    </Routes>
  </BrowserRouter>
);
