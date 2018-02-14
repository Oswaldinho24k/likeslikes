import React from 'react';
import {Switch, Route} from 'react-router-dom'
import MainPage from "./components/main/MainPage";
import LoginPage from "./components/login/LoginPage";

const Routes =()=>(
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route path='/login' component={LoginPage}/>
            </Switch>
        );

export default Routes;