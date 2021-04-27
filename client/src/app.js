import React, {useState,useEffect} from "react";

import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getRecipes } from "./actions/recipes.js";
//import me from "./images/me.jpg";
import Recipes from "./React-components/recipes/recipes.js";
import Form from "./React-components/form/form.js";
import useStyles from "./styles";


const App = ()=>{
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(getRecipes());
    },[currentId,dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position ="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Adam's Recipe App</Typography>
            </AppBar>
            <Grow in>
                <Container id="main">
                    <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} >
                            <Recipes setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;
