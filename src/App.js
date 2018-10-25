import React from 'react';
import  { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from './Home';
import './Main.css';

export default class App extends React.Component {
  render() {
    return (
      // <Router>
        <div>
          <Home />
          {/* <Route path="/Home" component={Home} /> */}
        </div>
      // </Router>
    );
  }
}
