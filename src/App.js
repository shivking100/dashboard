// import logo from './logo.svg';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';


function App() {
  return (   
      <Router>
        <Navbar />
        <Switch>
        <Route path ="/" exact component={Home} />               
        </Switch>
      </Router>    
  );
}

export default App;
