import { combineReducers } from "redux";
import location from "./location";
import theme from "./theme";
import animal from "./animal";
import breed from "./breed";

export default combineReducers({
  location,
  theme,
  animal,
  breed,
});
