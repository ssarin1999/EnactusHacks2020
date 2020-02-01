import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './home.css';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import background from '../Images/background-home.jpg';


class EnactusHome extends React.Component {
  render(){
  return (
    
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"></link>

    <div class="slogan">
      <h2>Helping Make The <span class="green">Earth</span> a Greener Place.<br/>One <span class="green">Business</span> At a Time.</h2>
    </div>

      <img class="home-background" src={background} width="100%" height="100%;"/>
    </div>
   
  
  );
}
}

export default EnactusHome;
