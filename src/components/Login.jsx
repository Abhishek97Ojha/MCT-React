import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
  return (
    <div className="login">
      <div className="left">
        <div className="top">
          <h1>
            Welcome back to <br />
            Pretty Login
          </h1>
          <p>It's great to have you back!</p>
        </div>
        <div className="middle">
          <div className="login-details">
            <h3>EMAIL</h3>
            <input type="text" />
            <h3>PASSWORD</h3>
            <input type="text" />
          </div>
          <div className="remember-me">
            <div className="left">
              <input type="checkbox" className="check" />
              <label>Remember me?</label>
            </div>
            <div className="right">
              <a href="/">Forgot Password?</a>
            </div>
          </div>
          <div className="button">
            <button className="login-btn" onClick={()=>{
                navigate("/home")
            }}>LOGIN</button>
            <button>CREATE ACCOUNT</button>
          </div>
        </div>
        <div className="down">
          <p>Or login with</p>
          <div className="login-with">
            <a href="/">Facebook</a>
            <a href="/">Google</a>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Login;
