import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import Logo from '../../assets/images/logo.svg';
import ContentLoader from 'react-content-loader';
import './film.css';

const Films = () => {
    const [state, setState] = useState(null);

    useEffect(() => {
        fetch('https://swapi.dev/api/films', {
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
               <h3>{data.title}</h3>
               <p>Title: {data.title}</p>
               <p>Release Date: {data.release_date}</p>
               <p>Director: {data.director} credits</p>
               <p>Producer: {data.producer}</p>
               <p>Opening: {data.opening_crawl}</p>
           </section> ))}
        </div>}
        </div>
    )   
}

export default Films;