import React from 'react';
import Nav from './Nav';

export default class Frame extends React.Component {
  render() {
    return (
      <div>
        <section>
          <Nav />
        </section>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}