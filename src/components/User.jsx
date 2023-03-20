import React, { useEffect, useState ,useContext} from "react";
import "./user.css";
import Navbar from "./Navbar";
import { getUserData } from "../functions/GetUserData";
import { useDispatch ,useSelector} from "react-redux";
import { allGender, femaleGender, maleGender } from "../redux/action";
import { MyContext } from "../App";
// export const arr= getUserData()
const User = () => {
  const context = useContext(MyContext);
  const [filter, setFilter] = useState({
		all: true,
		male: false,
		female: false,
	});

  // getUserData function which will fetch data from api provided
  useEffect(() => {
    getUserData(context.setUser);
  },[context.setUser]);

  // Getting data from Redux Store by Filtering user-data in reducer 
  const myState = useSelector((state)=> state.userData)
  const dispatch = useDispatch();
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
              checked={filter.all}
              type="radio"
              name="gender"
              id="all"
              value="all"
              onChange={() => {
                setFilter({
									...filter,
									male: false,
									female: false,
									all: true,
								})
                // Using action allGender
                dispatch(allGender(context.user))
              }}
            />
            <label htmlFor="all">All</label>
          </div>
          <div className="radio">
            <input
            checked={filter.male}
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={() => {
                setFilter({
									...filter,
									male: true,
									all: false,
									female: false,
								})
                // Using action maleGender
                dispatch(maleGender(context.user))
              }}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="radio">
            <input
            checked={filter.female}
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={() => {
                setFilter({
									...filter,
									female: true,
									all: false,
									male: false,
								})
                // Using action femaleGender
                dispatch(femaleGender(context.user))
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
        {context.user&&myState.length===0?
           context.user.map((ele) => {
              return(
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
              )
            })
        
        :
          myState &&
          myState.map((ele) => {
            return(
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
            )
          })}
        
        
      </div>
    </>
  );
};

export default User;
