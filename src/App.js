import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes';
import Frame from './layouts/Frame';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Frame>
          {
            routes
          }
        </Frame>
      </Router>
    );
  }
}

export default App;
