import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import Logo from '../../assets/images/logo.svg';
import ContentLoader from 'react-content-loader';
import './species.css';

const Species = () => {
    const [state, setState] = useState(null);

    useEffect(() => {
        fetch('https://swapi.dev/api/species', {
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
               <p>Classification: {data.classification}</p>
               <p>Average Height: {data.average_height} credits</p>
               <p>Designation: {data.designation}</p>
               <p>Eye colors: {data.eye_colors}</p>
               <p>Hair colors: {data.hair_colors}</p>
               <p>Homeworld: {data.homeworld}</p>
               <p>Language: {data.language}</p>
               <p>Skin colors: {data.skin_colors}</p>
           </section> ))}
        </div>}
        </div>
    )   
}

export default Species;