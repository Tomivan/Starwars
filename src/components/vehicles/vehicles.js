import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import Logo from '../../assets/images/logo.svg';
import ContentLoader from 'react-content-loader';
import './vehicles.css';

const Vehicles = () => {
    const [state, setState] = useState(null);

    useEffect(() => {
        fetch('https://swapi.dev/api/vehicles', {
            method: 'GET'
        })  
        .then(resp => resp.json())
        .then(
            response => {
                setState(response)
            }
        )   
    }, [])
    return (
        <div>
            {!state ? <div className="no-content">
               <ContentLoader />
            </div> :
            <div className="body">
            <nav className="navbar">
            <Link to="/"><img src={Logo} alt="starwars-logo" className="logo" /></Link>
                <ul>
                   <li><Link to="/people" className="link">People</Link></li>
                   <li><Link to="/planets" className="link">Planets</Link></li>
                   <li><Link to="/species" className="link">Species</Link></li>
                   <li><Link to="/vehicles" className="link">Vehicles</Link></li>
                   <li><Link to="/starships" className="link">Starships</Link></li>
                   <li><Link to="/films" className="link">Films</Link></li>   
               </ul>
            </nav>
           {state && state.results.map(data =>(<section className="card">
               <h3>The {data.name}</h3>
               <p>NAME: {data.name}</p>
               <p>Model: {data.model}</p>
               <p>Cost: {data.cost_in_credits} credits</p>
               <p>Crew: {data.crew}</p>
               <p>Passengers: {data.passengers}</p>
               <p>Cargo capacity: {data.cargo_capacity}</p>
               <p>Consumables: {data.consumables}</p>
               <p>Length: {data.length}</p>
               <p>Manufacturer: {data.manufacturer}</p>
               <p>Speed: {data.max_atmosphering_speed}</p>
               <p>Vehicle Class: {data.vehicle_class}</p>
           </section> ))}
        </div>}
        </div>
    )   
}

export default Vehicles;