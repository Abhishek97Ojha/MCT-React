const initialState = [];

//Filtering user-data
const userData = (state = initialState, action) => {
  switch (action.type) {
    case "ALL":
      return action.payload;
    case "MALE":
      const maleResult = action.payload.filter((ele) => ele.gender === "male");
      return maleResult;
    case "FEMALE":
        const result = action.payload.filter((ele) => ele.gender === "female");
        return result;
    default:
      return state;
  }
};
export default userData;
