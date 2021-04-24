import React from "react";
import Recipe from "./recipe/recipe.js"
import { useSelector } from "react-redux";

//import useStyles from "./styles";


const Recipes = () => {
    const recipes = useSelector((state)=> state.recipes)
    //const classes = useStyles();
    console.log(recipes);
    return(
        <>
        <h1>Recipes</h1>
        <Recipe/>
        <Recipe/>
        </>
    );
}

export default Recipes;