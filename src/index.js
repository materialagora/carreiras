import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Pages/Home/index.js'
import PageEmpty from './Pages/Empty'
import {BrowserRouter, Switch,Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/> 
      <Route path="/login" component={PageEmpty}/> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)