import React, { Component } from 'react';
import plantData from '../data/plants.js';
import PlantCover from './plantCover.js';
import PlantGrowth from './plantGrowth.js';
import PlantCareUse from './plantCareUse.js';
import GrowthCycle from './growthCycle.js';
import Benefits from './benefits.js';

// CSS
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

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
        <PlantCover plant={this.state.plant} slug={this.props.match.params.slug}/>

        <GrowthCycle plant={this.state.plant} slug={this.props.match.params.slug}/>

        <Box><Container><PlantGrowth plant={this.state.plant} slug={this.props.match.params.slug}/></Container></Box>

        <Benefits plant={this.state.plant} slug={this.props.match.params.slug}/>

        <Box><Container><PlantCareUse plant={this.state.plant} slug={this.props.match.params.slug}/></Container></Box>
      </section>
      );
  }
}

export default Plant;
