import React, { Component } from 'react';
import plantData from '../data/plants.js';

// CSS
import '../css/img.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Image from 'react-bootstrap/Image'

class PlantGrowth extends Component {
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
      <Grid container spacing={3}>
      <Grid item xs={8}>
          <Image src={this.state.plant.images.plantProfile} className="profileImg"/>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h2" color="textSecondary" align="left" gutterBottom>
            Growing Requirements:
            <List>
              <ListItem><ListItemText>Sun or Shade: <b>{this.state.plant.growthRequirements.sunShade}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Zones: <b>{this.state.plant.growthRequirements.zones}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Soil Type: <b>{this.state.plant.growthRequirements.soilType}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Water: <b>{this.state.plant.growthRequirements.water}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Acidity: <b>{this.state.plant.growthRequirements.ph}</b></ListItemText></ListItem>
            </List>
          </Typography>

          <Typography variant="h2" color="textSecondary" align="left" gutterBottom>
            Growth Habbit:
            <List>
              <ListItem><ListItemText>Habit: <b>{this.state.plant.growthHabbit.habit}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Life Cycle: <b>{this.state.plant.growthHabbit.lifeCycle}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Height: <b>{this.state.plant.growthHabbit.height}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Width: <b>{this.state.plant.growthHabbit.width}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Flower Color: <b>{this.state.plant.growthHabbit.flowerColor}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Flower Time: <b>{this.state.plant.growthHabbit.flowerTime}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Leave Color: <b>{this.state.plant.growthHabbit.leaveColor}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Leave Shape: <b>{this.state.plant.growthHabbit.leaveShape}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Leave Attributes: <b>{this.state.plant.growthHabbit.leaveAttributes}</b></ListItemText></ListItem>
            </List>
          </Typography>

          <Typography variant="h2" color="textSecondary" align="left" gutterBottom>
            Plant Propagation:
            <List>
              <ListItem><ListItemText>Seed & Pollination: <b>{this.state.plant.plantPropagation.seed}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Seed Time: <b>{this.state.plant.plantPropagation.seedTime}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Seed Collection: <b>{this.state.plant.plantPropagation.seedCollection}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Germination Temperature: <b>{this.state.plant.plantPropagation.germinationTemp}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Germination Time: <b>{this.state.plant.plantPropagation.germinationTime}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Cuttings: <b>{this.state.plant.plantPropagation.cuttings}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Division: <b>{this.state.plant.plantPropagation.division}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Runners: <b>{this.state.plant.plantPropagation.runners}</b></ListItemText></ListItem>
              <ListItem><ListItemText>Planting Time: <b>{this.state.plant.plantPropagation.plantTime}</b></ListItemText></ListItem>
            </List>
          </Typography>
      </Grid>
    </Grid>
      );
  }
}
export default PlantGrowth;
