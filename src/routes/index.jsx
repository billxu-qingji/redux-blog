import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Home from '../views/Home';
import Detail from '../views/Detail';

const routes = (
  <div>
    <Route exact path='/' component={Home} />
    <Route path='/detail' component={Detail} />
  </div>
)
export default routes;