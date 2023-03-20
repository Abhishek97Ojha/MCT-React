import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./productDetails.css";
import { useSelector } from "react-redux";
const ProductDetails = () => {
  const navigate = useNavigate();
  const myState = useSelector((state) => state.productReducer);
  console.log(myState);
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  useEffect(() => {
    setProductDetails(
      myState.productsData.find((ele) => {
        return ele.id === +id;
      })
    );
  }, []);

  return (
    <>
      {productDetails && (
        <div className="productDetails">
          <div className="top">
            <button
              onClick={() => {
                navigate("/products");
              }}
            >
              Back
            </button>
            <h1>{productDetails.category}</h1>
          </div>
          <div className="down">
            <div className="left">
              <img src={productDetails.image} alt="" />
            </div>
            <div className="right">
              <div className="details">
                <h3>Product Name</h3>
                <p>{productDetails.title}</p>
              </div>
              <div className="details">
                <h3>Product Price</h3>
                <p>${productDetails.price}</p>
              </div>
              <div className="details">
                <h3>Product Description</h3>
                <p>{productDetails.description}</p>
              </div>
              <div className="details">
                <h3>Product Rating</h3>
                <p>{productDetails.rating && productDetails.rating.rate}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
