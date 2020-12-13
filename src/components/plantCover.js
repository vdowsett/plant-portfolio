import React, { Component } from 'react';
import plantData from '../data/plants.js';

// CSS
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from 'react-bootstrap/Card'

class PlantCover extends Component {
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
    <Card style={{ height: '35rem', border:'none'}}>
      <Card.Img
            src={this.state.plant.images.plantCover} 
            title={this.state.plant.name}
            alt={this.state.plant.name}
            style={{ height: '35rem', objectFit: 'cover' }}/>
          <Card.ImgOverlay style={{ width: '30rem', margin: '20px', backgroundColor: '#fff'}}>
            <Typography variant="h1" component="h1" gutterBottom>
                {this.state.plant.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" component="p" gutterBottom>
                {this.state.plant.plantInformation.family} {this.state.plant.plantInformation.genus} {this.state.plant.plantInformation.species} "{this.state.plant.plantInformation.cultivar}"
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p" gutterBottom>
                Common Names:
            </Typography>
            <Typography variant="caption" color="textSecondary" component="p" gutterBottom>
                {this.state.plant.plantInformation.commonNames}
            </Typography>
          </Card.ImgOverlay>
        </Card>
      );
  }
}

export default PlantCover;
