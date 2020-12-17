import { Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import plantData from './../data/plants.js';


class Library extends Component { 
    constructor(props) {
        super(props);
        this.state = { plants: plantData };
      }

    render() {
     return ( 
       <section>
         {
          this.state.plants.map( (plant, index) => 
            <div key={index} className='library'>
                <Link to={`/plant/${plant.slug}`} key={index}><div className='libraryImgWrapper'><img src={plant.images.plantCover} className='libraryImg'/></div></Link>
              
               <Typography variant="overline" color="textSecondary" style={{ fontSize: '1.5rem'}}><Link to={`/plant/${plant.slug}`} key={index}>{plant.name}</Link></Typography>
               <br/>
               <Typography variant="caption" color="textSecondary" style={{ fontSize: '1rem'}}>{plant.plantInformation.genus} {plant.plantInformation.species} <i>'{plant.plantInformation.cultivar}'</i></Typography>
            </div>
          )
        }
       </section>
      );
    }
  }

export default Library;