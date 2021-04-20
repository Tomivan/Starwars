import React from 'react';
import { Router } from '@reach/router';
import People from './People/people';
import Starwars from './starwars';
import Vehicles from './vehicles/vehicles';
import Planets from './planets/planets';
import Starships from './starships/starships';
import Films from './films/films';
import Species from './species/species'; 


const Pages = () => {
    return(
        <Router>
            <Starwars exact path="/" />
            <People path="/people" />
            <Species path="/species" />
            <Vehicles path="/vehicles" />
            <Planets path="/planets" />
            <Starships path="/starships" />
            <Films path="/films" />
        </Router>
    )
}
export default Pages;