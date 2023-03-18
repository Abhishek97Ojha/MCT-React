import React, { useEffect, useState } from "react";
import "./user.css";
import Navbar from "./Navbar";
import { getUserData } from "../functions/GetUserData";

const User = () => {
  const [user, setUser] = useState("");
  const [gender, setGender] = useState("");
  useEffect(() => {
    getUserData(setUser,gender);
  }, [gender]);
  return (
    <>
      <Navbar />
      <div className="user">
        <h1>User Details</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit impedit
          at libero quisquam sapiente omnis alias dolorem quae. Nesciunt ipsum
          hic voluptate doloribus provident ducimus sequi delectus quos dolorem
          laborum, placeat nam odit fugiat, aut aliquam amet magni temporibus
          obcaecati sint. Natus nostrum sint quas expedita? Voluptatem ipsa
          nostrum vitae modi dicta in laborum quam dolorum, qui iste esse
          explicabo aliquam quidem iure porro quas illo eos earum quasi
          aspernatur corporis? Fugiat ratione vero excepturi optio accusamus
          earum non hic!
        </p>
        <div className="gender">
          <div className="radio">
            <input
              type="radio"
              name="gender"
              id="all"
              value="all"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="all">All</label>
          </div>
          <div className="radio">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="radio">
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="user-nav">
          <p className="img">IMAGE</p>
          <p className="name">NAME</p>
          <p className="email">EMAIL</p>
          <p className="gen">GENDER</p>
        </div>
        {user &&
          user.map((ele) => {
            if (ele.gender) {
              return (
                <div className="user-data">
                  <div className="img-data">
                    <img src={ele && ele.picture.large} alt="" />
                  </div>
                  <div className="name-data">
                    {ele && ele.name.first}&nbsp;{ele && ele.name.last}
                  </div>
                  <div className="email-data">{ele && ele.email}</div>
                  <div className="gen-data">{ele && ele.gender}</div>
                </div>
              );
            }
            return ele;
          })}
      </div>
    </>
  );
};

export default User;
