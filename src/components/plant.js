import React, { Component } from 'react';
import plantData from '../data/plants.js';

class Plant extends Component {
  constructor(props) { 
    super(props);

    const plant = plantData.find( plant => {
      return this.props.match.params.slug === plant.slug
    });

    this.state = {
      plant: plant
    };
  }

  render() {
    return (
      <section>
        {console.log(this.state.plant.name)} 
        <h1>Hello There</h1>
        <h1>Prop Slug: {this.props.match.params.slug}</h1>
        {console.log(this.props.match.params.slug)}
        <h1>JSON slug: {this.state.plant.slug}</h1>
        

      </section>
      );
  }
}

export default Plant;
