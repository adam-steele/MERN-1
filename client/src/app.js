import React from "react";

import { Container } from "@material-ui/core";

import {  BrowserRouter, Switch, Route} from "react-router-dom";



import NavBar from "./React-components/app-bar/app-bar.js"

import Home from "./React-components/Home/home.js";
import Auth from "./React-components/Auth/Auth";


const App = ()=>{
   
    return (
        <BrowserRouter>
        <Container maxWidth="lg">
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth" exact component={Auth} />
            </Switch>
        </Container>
        </BrowserRouter>
    );
};

export default App;
