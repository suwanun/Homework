import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import {Input,Output} from './component';
import {querystring} from 'query-string';

class App extends Component {
  constructor(props) {
    super();
  }
  render(){
    return (
      <BrowserRouter>
      <div className = "App">
      <div className = "App-header">
      <img src = {logo} className = "App-logo" alt = "logo" />
      <ul>
      <li><NavLink to = "/" activeClassName = "active">Input</NavLink></li>
      <li></li>
      </ul>
      </div>
      <div className = "App-intro">
      <Switch>
      <Route path = "/" component = {Input} exact = {true} />
      <Route path = "/level1/:value" component = {Output} exact = {true} />
      </Switch>
      </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
