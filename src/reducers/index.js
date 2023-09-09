import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
const AllReducers = combineReducers({
    loginReducer,
})

export default AllReducers