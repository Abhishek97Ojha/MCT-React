import { combineReducers } from "redux";
import userData from "./reducer";
import productReducer from "./productReducer";

// Combining all reducers used  
const rootReducer = combineReducers({
    userData:userData,
    productReducer:productReducer
});
export default rootReducer;
 