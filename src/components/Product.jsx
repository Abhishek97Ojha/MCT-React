import React, { useContext } from "react";
import "./product.css";
import Navbar from "./Navbar";
import { MyContext } from "../App";
import { Link,useParams} from "react-router-dom";
const Product = () => {
  const context = useContext(MyContext);
  const {category} = useParams();
//   const  = params
  return (
    <>
      <Navbar />
      <div className="products">
        <div className="left">
          {context.categories.map((ele, id) => {
            // console.log(ele, id);
            
            return (
              <div className="category">
                <Link to={`/products/${ele}`} className="link" key={id}>
                  <p>{ele}</p>
                  {console.log(category)}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default Product;
