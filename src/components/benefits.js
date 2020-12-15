import React, { Component } from 'react';
import plantData from '../data/plants.js';
import benefitData from '../data/benefits.js';

// CSS
import '../css/img.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// icons
// import { GiRabbit, GiDeerTrack, GiAcorn, GiAerosol, GiAgave, GiAlgae, GiAmberMosquito, GiAngularSpider, GiAnt, GiAnts, GiApothecary, GiAppleCore, GiBarn, GiBat, GiBee, GiBeech, GiBeet, GiBerriesBowl, GiBirdHouse, GiBroccoli, GiBubblingFlask, GiButterfly, GiCarrot, GiCauldron, GiCaterpillar, GiCherry , GiClothJar, GiCoffeeCup, GiDragonfly, GiEgyptianBird, GiFallingLeaf, GiFern, GiFruitTree, GiGarlic,GiHerbsBundle,GiHummingbird, GiLadybug, GiMartini,GiMushroomGills, GiNewShoot, GiPineTree,GiPollenDust, GiRemedy, GiSnail,GiSquirrel,GiStagHead, GiTeapot, GiTurd, GiVineLeaf, GiPerfumeBottle,GiPoisonGas} from 'react-icons/gi';

class Benefits extends Component {
  constructor(props) { 
    super(props);

    const plant = plantData.find( plant => {
      return this.props.slug === plant.slug
    });

    this.state = {
        plant: plant,
        benefits: benefitData,
    };
  }

  render() {

    return (

      <Grid container style={{ backgroundColor: '#ececec' }}>
        <Grid item xs={12} style={{ height: '2.5rem'}}></Grid>

        <Grid item xs={12}>
            <Typography variant="h4" color="textSecondary" gutterBottom>{this.state.plant.name} Garden Benefits </Typography>
        </Grid>


            { this.state.benefits.map( ( benefit, index ) => 
                this.state.plant.gardenBenefits.map(gardenBenefit =>
            { if (benefit.name === gardenBenefit.name) {
                console.log(gardenBenefit);
                console.log(benefit);
                return <Grid item xs><Typography variant="overline" color="textSecondary" gutterBottom><div key={index}><div><img src={benefit.icon} style={{ maxWidth: '75px', maxHeight: '55px', marginTop:'15px',}}/></div><div>{benefit.displayName}</div></div></Typography></Grid>
            } else {
                return
            }
            })
            )}
            

        <Grid item xs={12} style={{ height: '5rem'}}></Grid>
    </Grid>
    );

  }

}
export default Benefits;
