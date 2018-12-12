import {combineReducers} from "redux";
import list1 from "./list1";
import user from "./user";
import details from "./details";
import course from "./course";
import list from "./list";
import java from "./java";
import front from "./front";
let reducer = combineReducers({
   list1,
   details,
    user,
    course,
    list,
    java,
    front
});
export default reducer;