import { combineReducers } from "redux";
import userData from "./reducer";
import productReducer from "./productReducer";
const rootReducer = combineReducers({
    userData:userData,
    productReducer:productReducer
});
export default rootReducer;
 