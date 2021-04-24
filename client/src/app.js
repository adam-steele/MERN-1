import React, {useEffect} from "react";

import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getRecipes } from "./actions/recipes.js";
import me from "./images/me.jpg";
import Recipes from "./components/recipes/recipes.js";
import Form from "./components/form/form.js";
import useStyles from "./styles";


const App = ()=>{
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(getRecipes());
    },[dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position ="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Adam's Recipe App</Typography>
                <img className={classes.image} src={me} alt="Banner" height="60" width="60"/>
            </AppBar>
            <Grow in>
                <Container id="main">
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} >
                            <Recipes/>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;
