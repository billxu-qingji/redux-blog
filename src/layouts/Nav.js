import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/detail">Home</Link>
      </nav>
    );
  }
} 