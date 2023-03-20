import { createStore } from "redux";
import rootReducer from "./root-reducer";

// Storing data provided from reducer
const store = createStore(rootReducer);
export default store;