import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.js';



 export default (recipes = [],action) =>{
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        
        case CREATE:
            return [...recipes, action.payload];
        
        case UPDATE:
        case LIKE:
            return recipes.map((recipe)=> recipe._id ===action.payload._id ? action.payload : recipe);
        
        case DELETE:
            return recipes.filter((recipe)=>recipe._id !==action.payload);
 
    
        default:
            return recipes;
    }
}

/*export const recipeReducer =(recipes = [],action) =>{
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
            break;
        
        case CREATE:
            return [...recipes, action.payload];
    
        default:
            return recipes;
    }
};*/