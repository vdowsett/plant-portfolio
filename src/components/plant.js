import React, { Component } from 'react';

class Plant extends Component {
  render() {
    return (
      <section className="plant">
        {this.props.match.params.slug} Plant will go here 
      </section>
    );
  }
}

export default Plant;
