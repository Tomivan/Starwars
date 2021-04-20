import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import Logo from '../../assets/images/logo.svg';
import ContentLoader from "react-content-loader";
import './people.css';

const People = () => {
    const [state, setState] = useState(null);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/', {
            method: 'GET'
        })  
        .then(resp => resp.json())
        .then(
            response => {
                setState(response);
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
               <h3> {data.name}</h3>
               <p>Name: {data.name}</p>
               <p>Mass: {data.mass}kg</p>
               <p>Gender: {data.gender}</p>
               <p>Birth Year: {data.birth_year}</p>
               <p>Eye Color: {data.eye_color}</p>
               <p>Hair Color: {data.hair_color}</p>
               <p>Height: {data.height}cm</p>
               <p>Skin Color: {data.skin_color}</p>
           </section> ))}
        </div>}
        </div>
    )   
}

export default People;