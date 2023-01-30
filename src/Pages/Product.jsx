import React from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useState } from "react";

function Product() {
  const navigate = useNavigate();
  const [goToProduct, setGoToProduct] = useState(() => {
    return false;
  });
  return (
    <div>
      Product
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product
      </button>
      <Link to={"/product/details/5"}>
        <button>Product Details</button>
      </Link>
      {goToProduct && <Navigate to="/product/details/3" />}
      <button
        onClick={() => {
          setGoToProduct({ goToProduct: true });
        }}
      >
        Navigate to product -3
      </button>
    </div>
  );
}

export default Product;
