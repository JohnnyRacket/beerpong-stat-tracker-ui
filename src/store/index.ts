import { createStore } from "redux";
import { combineReducers } from "redux";
import cups from './cups/reducer';


export default createStore(combineReducers({cups}));
