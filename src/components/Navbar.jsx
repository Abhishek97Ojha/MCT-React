import React, { useContext } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
// import { MyContext } from '../App'

const Navbar = () => {
    // const {context} = useContext(MyContext);
  return (
    <div className='navbar'>
         <Link to="/home" className="link" >
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
        <Link to="/" className="link">
          <h3>LogOut</h3>
        </Link>
    </div>
  )
}

export default Navbar