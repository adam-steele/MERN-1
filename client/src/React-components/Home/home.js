
import React, {useState,useEffect} from "react";

import { Container, AppBar, Typography, Grid, Grow, } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getRecipes } from "../../actions/recipes.js";

import Recipes from "../recipes/recipes.js";
import Form from "../form/form";


const Home = ()=>{
    const [currentId, setCurrentId] = useState(null);
    
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(getRecipes());
    },[currentId,dispatch]);

    return(
        <Grow in>
                <Container id="main">
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} >
                            <Recipes setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
    )
}

export default Home