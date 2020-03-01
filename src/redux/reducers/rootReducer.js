import { combineReducers } from "redux";
import catReducer from "./catReducers";
import LOTRReducer from "./LOTRReducers";

const rootReducer = combineReducers({
  cat: catReducer,
  LOTR: LOTRReducer
});

export default rootReducer;
