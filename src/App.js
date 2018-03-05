import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import Decks from './components/Decks'
// import Footer from './components/Footer'
import Floors from './components/Floors'
import Gutters from './components/Gutters'
// import Header from './components/Header'
// import Home from './components/Home'
import KitchenBath from './components/KitchenBath'
// import Nav from './components/Nav'
import Remodeling from './components/Remodeling'
import Restoration from './components/Restoration'
import Roofing from './components/Roofing'
import Siding from './components/Siding'
import WindowsDoors from './components/WindowsDoors'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Hello world</h1>
        </div>
      </Router>
    );
  }
}

export default App;
