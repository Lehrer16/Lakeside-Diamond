import { Link } from "react-router-dom";
import React from 'react';
import logo from '../assets/logo.png';
import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";
import Instagram from "../Components/Instagram";

const Home: React.FC = () => {

    return (
        <div>
            <Link to="/">
                <img className="logo" src={logo} alt="Lakeside Logo" />
            </Link>

            <Navbar showHomeButton={false} />

            <div>
                <Link to='/Login'>ADMIN LOGIN</Link>
                <Instagram />
            </div>
            <div className="contact">
                <h1 className="contactInfo">CONTACT US</h1>
                <h1 className="contactInfo">For information about inventory or inquiries about a custom project leave contact below with a brief description.</h1>
                
                <Contact />
            </div>

            <div>
                <a className='todo' href="https://www.lakesidediamond.com" target="_blank" rel="noopener noreferrer">REFERENCE PAGE</a>
            </div>  
        </div>
    );
};

export default Home;
