import React, { Component } from 'react';
import plantData from '../data/plants.js';

// CSS
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Image from 'react-bootstrap/Image'

class PlantCareUse extends Component {
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

    const resources = this.state.plant.plantUse.resources;
    const recipeIdeas = this.state.plant.plantUse.recipeIdeas;
    return (

      <Grid container spacing={3}>

        <Grid item xs={8}>
          <Typography variant="h2" color="textSecondary" align="left" gutterBottom><br/>Plant Care:</Typography>
          <Typography variant="body1" color="textSecondary"  gutterBottom><List>
              <ListItem><ListItemText >Known Pests: <b>{this.state.plant.plantCare.pests}</b></ListItemText></ListItem>
              <ListItem><ListItemText >Know Diseases: <b>{this.state.plant.plantCare.diseases}</b></ListItemText></ListItem>
              <ListItem><ListItemText >Care Tips and Tricks: <b>{this.state.plant.plantCare.plantCareTips}</b></ListItemText></ListItem>
              <ListItem><ListItemText >Origin: <b>{this.state.plant.plantCare.origin}</b></ListItemText></ListItem>
              <ListItem><ListItemText >Companions: <b>{this.state.plant.plantCare.companions}</b></ListItemText></ListItem>
              <ListItem><ListItemText >Competitors: <b>{this.state.plant.plantCare.competitors}</b></ListItemText></ListItem>
              </List></Typography>
        </Grid>

        <Grid item xs={4}>
        <Image src={this.state.plant.images.plantCare} className="careImg"/>
        </Grid>

        <Grid item xs={12}> <Divider/> </Grid>
        <Grid item xs={6}><Typography variant="h2" color="textSecondary" align="left" gutterBottom>Culinary Uses: </Typography><Typography variant="body1" color="textSecondary" align="left" gutterBottom>{this.state.plant.plantUse.culinaryUses}</Typography></Grid>
        <Grid item xs={6}><Typography variant="h2" color="textSecondary" align="left" gutterBottom>Medicinal Uses: </Typography><Typography variant="body1" color="textSecondary" align="left" gutterBottom>{this.state.plant.plantUse.medicinalUses}</Typography></Grid>
        
        <Grid item xs={12}> <Divider/> </Grid>

        <Grid item xs={8}>
        <Image src={this.state.plant.images.plantRecipe} className="recipeImg"/>
        </Grid>

        <Grid item xs={4}> 
        <Typography variant="h2" color="textSecondary" align="left" gutterBottom>Resources: </Typography>
        <Typography variant="body1" color="textSecondary" align="left" gutterBottom dangerouslySetInnerHTML={{ __html: resources }}></Typography>
        <Typography variant="h2" color="textSecondary" align="left" gutterBottom>Recipe Idea: </Typography>
        <Typography variant="body1" color="textSecondary" align="left" gutterBottom dangerouslySetInnerHTML={{ __html: recipeIdeas }}></Typography>
        </Grid>

        <Grid item xs={12}> <Divider/> </Grid>
        
        <Grid item xs={12}><Typography variant="h2" color="textSecondary" align="left" gutterBottom>Old Wifes Tales: </Typography><Typography variant="body1" color="textSecondary" align="left" gutterBottom>{this.state.plant.plantUse.lore}</Typography></Grid>

      </Grid>
      );
  }
}
export default PlantCareUse;
