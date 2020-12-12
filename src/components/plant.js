import React, { Component } from 'react';
import plantData from '../data/plants.js';

// CSS
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
      <Card>
        <CardActionArea>
        <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="300"
        image={this.state.plant.plantCover} 
        title={this.state.plant.name}  >
        </CardMedia>
        <CardContent>
          <Typography variant="h2" component="h2" gutterBottom>
            {this.state.plant.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p" gutterBottom>
            {this.state.plant.plantInformation.family} {this.state.plant.plantInformation.genus} {this.state.plant.plantInformation.species} "{this.state.plant.plantInformation.cultivar}"
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p" gutterBottom>
            Some Common Names Include:
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p" gutterBottom>
            {this.state.plant.plantInformation.commonNames}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      );
  }
}

export default Plant;
