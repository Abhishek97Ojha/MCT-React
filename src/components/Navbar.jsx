import React, { useEffect } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // This function will navigate to login page and will clear local storage 
  const handleClick = () => {
    localStorage.clear();
    navigate("/");
  };

  // This useEffect is used to manage history
  useEffect(() => {
    window.addEventListener("popstate", (e) => {
      window.history.go(1);
    });
  }, []);
  return (
    <div className="navbar">
      <Link to="/home" className="link">
        <h3>Home</h3>
      </Link>
      <Link to="/products" className="link">
        <h3>Products</h3>
      </Link>
      <Link to="/users" className="link">
        <h3>Users</h3>
      </Link>
      <Link to="/contact" className="link">
        <h3>Contact</h3>
      </Link>
      <Link to="/" className="link" onClick={handleClick}>
        <h3>LogOut</h3>
      </Link>
    </div>
  );
};

export default Navbar;
