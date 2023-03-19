import React, { useContext } from "react";
import "./navbar.css";
import { Link,useNavigate } from "react-router-dom";
// import { MyContext } from '../App'

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick =()=>{
    localStorage.clear()
    // window.location.reload()
    navigate("/")
  }
  // const {context} = useContext(MyContext);
  return (
    <div className="navbar">
      <Link to="/home" className="link">
        <h3>Home</h3>
      </Link>
      <Link to="/products/:category" className="link">
        <h3>Products</h3>
      </Link>
      <Link to="/users" className="link">
        <h3>Users</h3>
      </Link>
      <Link to="/contact" className="link">
        <h3>Contact</h3>
      </Link>
      {/* <Link to="/" className="link">
          <h3>LogOut</h3>
        </Link> */}
      <button className="logout" onClick={handleClick}>
        <h3>LogOut</h3>
      </button>
    </div>
  );
};

export default Navbar;
