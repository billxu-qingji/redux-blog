import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/home">home</Link>
        <Link to="/detail">detail</Link>
      </nav>
    );
  }
} 