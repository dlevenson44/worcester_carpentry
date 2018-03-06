import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import Contact from './components/Contact'
import Decks from './components/Decks'
import Floors from './components/Floors'
import Gutters from './components/Gutters'
import Header from './components/Header'
// import Home from './components/Home'
// import KitchenBath from './components/KitchenBath'
import Nav from './components/Nav'
import Remodeling from './components/Remodeling'
import Restoration from './components/Restoration'
import Roofing from './components/Roofing'
import Siding from './components/Siding'
import WindowsDoors from './components/WindowsDoors'

// Route below is removed until client wants it readded
// <Route path='/kitchenbath' component={KitchenBath}/>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Nav />
          <Route path='/contact' component={Contact} />
          <Route path='/decks' component={Decks}/>
          <Route path='/floors' component={Floors}/>
          <Route path='/gutters' component={Gutters}/>          
          <Route path='/remodeling' component={Remodeling}/>
          <Route path='/restoration' component={Restoration}/>
          <Route path='/roofing' component={Roofing}/>
          <Route path='/siding' component={Siding}/>
          <Route path='/windowsdoors' component={WindowsDoors}/>
        </div>
      </Router>
    );
  }
}

export default App;
