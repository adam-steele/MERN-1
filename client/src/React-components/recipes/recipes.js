import React from "react";
import Recipe from "./recipe/recipe.js"
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";


const Recipes = ({setCurrentId}) => {
    const recipes = useSelector((state)=> state.recipes)
    const classes = useStyles();
    
    return(
        !recipes.length ? <CircularProgress/> :(
            <Grid className ={classes.container} container alignItems = "stretch" spacing={3}>
                {recipes.map((recipe)=>(
                    <Grid key={recipe._id} item xs={12} sm={6}>
                        <Recipe recipe={recipe} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Recipes;