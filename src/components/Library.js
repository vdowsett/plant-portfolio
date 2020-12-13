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
       <section className='library'>
         {
          this.state.plants.map( (plant, index) => 
            <div key={index} >
                <Link to={`/plant/${plant.slug}`} key={index}><img src={plant.images.plantCover} width={500}/></Link>
              
               <div><Link to={`/plant/${plant.slug}`} key={index}>{plant.name}</Link></div>
               {console.log(plant.plantInformation.genus)}
               <div>{plant.plantInformation.genus} {plant.plantInformation.species} <i>'{plant.plantInformation.cultivar}'</i></div>
            </div>
          )
        }
       </section>
      );
    }
  }

export default Library;