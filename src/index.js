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
import NotFound from "./NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="Product">
        <Route index element={<Product />}></Route>
        <Route path="List" element={<ProductList />}></Route>
        <Route path="Create" element={<CreateProduct />}></Route>
        <Route path="Details" element={<ProductDetails />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);
