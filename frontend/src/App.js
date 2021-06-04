import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
            <h1>This is the home page</h1>
          </Route>
          <Route path='/services'>
            <h1>This is Services page</h1>
          </Route>
          <Route path='/projects'>
            <h1>This is Projects page</h1>
          </Route>
          <Route path='/aboutus'>
            <h1>This is About Us</h1>
          </Route>
          <Route path='/contactus'>
            <h1>This is Contact Us page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
