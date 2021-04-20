import React  from 'react';
import { Link } from '@reach/router';
import Logo from '../assets/images/logo.svg';
import Star1 from '../assets/images/star-1.jpg';
import Star2 from '../assets/images/star-2.jpg';
import Star3 from '../assets/images/star-3.jpg';
import Star4 from '../assets/images/star-4.jpg'; 
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import './starwars.css';

const Starwars = () => {
    return (
        <div> 
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
           <div className="main">
           <Carousel fade>
               <Carousel.Item>
                   <img className="slide" src={Star1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img className="slide" src={Star2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img className="slide" src={Star3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img className="slide" src={Star4} alt="Fourth slide" />
              </Carousel.Item>
            </Carousel>
            <section className="section">
               <h1>Welcome, Jedi!</h1>
               <p>And may the Force be with you</p>
            </section>
           </div>
        </div>
    )   
}

export default Starwars;