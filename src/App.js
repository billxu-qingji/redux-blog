import React, { Component } from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import Provider from 'react-redux';
import './App.css';
import routes from './routes';
import configureStore from './redux/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {routes(history)}
      </Provider>
    )
  }
}

export default App;
