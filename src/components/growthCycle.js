import React, { Component } from 'react';
import plantData from '../data/plants.js';

// CSS
import '../css/img.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Image from 'react-bootstrap/Image'

class GrowthCycle extends Component {
  constructor(props) { 
    super(props);

    const plant = plantData.find( plant => {
      return this.props.slug === plant.slug
    });

    this.state = {
      plant: plant
    };
    
  }

  render() {
    return (

      <Grid container style={{ backgroundColor: '#ececec' }}>
        <Grid item xs={12} style={{ height: '2.5rem'}}></Grid>
        <Grid item xs={12}>
            <Typography variant="h4" color="textSecondary" gutterBottom>{this.state.plant.name} Growth Cycle</Typography>
        </Grid>
        <Grid item xs={12} style={{ height: '2rem'}}></Grid>
        <Grid item xs={2}><div className="roundImgWrapper">
            <Image src={this.state.plant.images.seed} className="roundImg"/></div>
            <Typography variant="overline" color="textSecondary" align="left" >Seed</Typography>
        </Grid>
        <Grid item xs={2}><div className="roundImgWrapper">
            <Image src={this.state.plant.images.seedling}  className="roundImg"/></div>
            <Typography variant="overline" color="textSecondary" align="left" >Seedling</Typography>
        </Grid>
        <Grid item xs={2}><div className="roundImgWrapper">
            <Image src={this.state.plant.images.growingPlant}  className="roundImg"/></div>
            <Typography variant="overline" color="textSecondary" align="left" >Growing Plant</Typography>
        </Grid>
        <Grid item xs={2}><div className="roundImgWrapper">
            <Image src={this.state.plant.images.maturePlant}  className="roundImg"/></div>
            <Typography variant="overline" color="textSecondary" align="left" >Mature Plant</Typography>
        </Grid>
        <Grid item xs={2}><div className="roundImgWrapper">
            <Image src={this.state.plant.images.flower}  className="roundImg"/></div>
            <Typography variant="overline" color="textSecondary" align="left" >Flower</Typography>
        </Grid>
        <Grid item xs={2}><div className="roundImgWrapper">
            <Image src={this.state.plant.images.harvest}  className="roundImg"/></div>
            <Typography variant="overline" color="textSecondary" align="left" >Harvest</Typography>
        </Grid>
        <Grid item xs={12} style={{ height: '5rem'}}></Grid>
    </Grid>
      );

      
  }

}
export default GrowthCycle;
