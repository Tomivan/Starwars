import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import Logo from '../../assets/images/logo.svg';
import ContentLoader from 'react-content-loader';
import './planets.css';

const Planets = () => {
    const [state, setState] = useState(null);

    useEffect(() => {
        fetch('https://swapi.dev/api/planets', {
            method: 'GET'
        })  
        .then(resp => resp.json())
        .then(
            response => {
                console.log(response);
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
               <h3>{data.name}</h3>
               <p>Name: {data.name}</p>
               <p>Population: {data.population}</p>
               <p>Climate: {data.climate}</p>
               <p>Diameter: {data.diameter}</p>
               <p>Gravity: {data.gravity}</p>
               <p>Orbital Period: {data.orbital_period}</p>
               <p>Rotation Period: {data.rotation_period}</p>
               <p>Surface Water: {data.surface_water}</p>
               <p>Terrain: {data.terrain}</p>
           </section> ))}
        </div>}
        </div>
    )   
}

export default Planets;