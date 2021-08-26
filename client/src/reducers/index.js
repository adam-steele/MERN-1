import { combineReducers } from "redux";
import recipes from './recipes.js';
import auth from "./auth";


export default combineReducers({ recipes, auth });

//import { recipeReducer } from "./recipes.js";

//export default combineReducers({recipeReducer});

