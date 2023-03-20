import React, { useContext, useEffect } from "react";
import "./product.css";
import Navbar from "./Navbar";
import { MyContext } from "../App";
import { Link, useParams } from "react-router-dom";
import { getProductCategories, getProductList } from "../functions/GetProducts";
const Product = () => {
  const context = useContext(MyContext);

  // destructuring param
  const { category } = useParams();
  
  // In This UseEffect two functions are called to get product categories and product list
  useEffect(() => {
    getProductCategories(context.setProductCategory);
    getProductList(context.setProductList, context.categories);
  }, [context.categories,context.setProductCategory,context.setProductList]);
  return (
    <>
      <Navbar />
      <div className="products">
        <div className="left">
          
          {/* product category is a state present in App.js file getting here through context api "MyContext"*/}
          {/* mapping on product category to get different categories */}
          {context.productCategory.map((ele) => {
            return (
              <div className="category">
                <Link
                  to={ele}
                  className="link"
                  onClick={() => {
                    context.setCategories(ele);
                  }}
                >
                  <p>{ele && ele}</p>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="right">
          <ul>
            {/* product list is a state present in App.js file getting here through context api "MyContext"*/}
            {/* mapping on product list to get list of different products */}
            {context.productList.map((ele) => {
              return (
                <Link to={`/productDetails/${ele.id}`}>
                  <li>{ele && ele.title}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Product;
