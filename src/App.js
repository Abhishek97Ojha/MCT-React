import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Product from "./components/Product";
import User from "./components/User";
import ContactUs from "./components/ContactUs";
import { createContext, useEffect, useState } from "react";
import { getProductCategories } from "./functions/GetProducts";
export const MyContext = createContext();
function App() {
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState("");
  
  useEffect(() => {
    getProductCategories(setCategories);
  }, []);
  return (
    <MyContext.Provider value={{ categories: categories ,user:user,setUser:setUser}}>
      <div className="App">
        {/* <Login /> */}
        {/* {console.log(categories)} */}
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/products" element={<Product />}></Route>
          <Route path="/users" element={<User />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </div>
    </MyContext.Provider>
  );
}

export default App;
