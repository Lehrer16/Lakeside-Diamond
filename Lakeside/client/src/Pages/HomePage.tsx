import { Link } from "react-router-dom";
import React from 'react';
import logo from '../assets/logo.png';
import example from '../assets/example.jpg';
import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";

const Home: React.FC = () => {

    return (
        <div>
            <div>
                <Link to="https://www.lakesidediamond.com">REFERENCE PAGE</Link>
            </div>  
            
            <img className="logo" src={logo} alt="Lakeside Logo" />

            <Navbar showHomeButton={false} showPhotosButton={true} showInstagramButton={true} />

            <div>
                <h1>Instagram API</h1>
                <img className="instaAPI" src={example} alt="Example Photo" />
            </div>
            <div className="contact">
            <Contact />
            </div>
            
        </div>
    );
};

export default Home;
