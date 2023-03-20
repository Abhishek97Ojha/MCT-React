import React, { useContext, useEffect } from "react";
import "./product.css";
import Navbar from "./Navbar";
import { MyContext } from "../App";
import { Link, useParams } from "react-router-dom";
import { getProductCategories, getProductList } from "../functions/GetProducts";
const Product = () => {
  const context = useContext(MyContext);
  const { category } = useParams();
  useEffect(() => {
    getProductCategories(context.setProductCategory);
    getProductList(context.setProductList, context.categories);
  }, [context.categories]);
  return (
    <>
      <Navbar />
      <div className="products">
        <div className="left">
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
