import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Frame from '../layouts/Frame';
import Home from '../views/Home';
import Detail from '../views/Detail';

const routes = function (history) {
  return (
    <Router history={history}>
      <React.Fragment>
        <Route path='/' component={Frame} />
        <Route path="/home" component={Home} />
        <Route path='/detail' component={Detail} />
      </React.Fragment>
    </Router>
  )
}

export default routes;