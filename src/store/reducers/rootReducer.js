import { combineReducers } from "redux";
import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  project: projectReducer,
});

export default rootReducer;
