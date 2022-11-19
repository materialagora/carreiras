 import React from "react";
 import {Switch , Route ,Redirect } from "react-router"

 import HeroesCrud from "./components/Heroes/HeroesCrud"
 import HomeHeroes from "./components/HomeHeroes/HomeHeroes"

 export default props => 
 <Switch>
    <Route exact path='/' component={HomeHeroes} />
    <Route  path='/heroes' component={HeroesCrud} />
    <Redirect from="*" to="/" />
    
 </Switch>