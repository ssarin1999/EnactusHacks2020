import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './EnactusMain.css';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import logo from './Images/logo.PNG';
import Home from './Homepage/home';
import Enter from './EnterUsage/enterusage';
import See from './SeeUsage/seeusage';

class EnactusMainPage extends React.Component {
  render(){
  return (
    
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"></link>

    <Router>

    <div class="topnav" id="myTopnav">
          <img class="logo" src={logo} width="175 " height="100"/>
          <div class="name">
            <h1>EnerTrack</h1>
         </div>
          <NavLink exact to="/login" activeClassName="active">Login</NavLink>
          <NavLink exact to="/premium" activeClassName="active">Premium</NavLink>
          <NavLink to="/see" activeClassName="active">My Usage</NavLink>
          <NavLink exact to="/add" activeClassName="active">Add Usage</NavLink>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
    </div>
    <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >
     <Switch location={location}>
        <Route exact path='/'component={Home}/>
        <Route exact path='/add'component={Enter}/>
        <Route exact path='/see'component={See}/>
    </Switch>

      </CSSTransition>
          </TransitionGroup>
        )} />
      </Router>
    </div>
   
  
  );
}
}

export default EnactusMainPage;
