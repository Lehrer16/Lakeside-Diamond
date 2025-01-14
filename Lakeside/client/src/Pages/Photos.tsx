import { Link } from "react-router-dom";
import React from 'react';
import logo from '../assets/logo.png';
import example from '../assets/example.jpg';
import Navbar from "../Components/Navbar";


const Photos: React.FC = () => {



    return (
        <div>

 
            <img className="logo" src={logo} alt="Lakeside Logo" />

            <Navbar showPhotosButton={false} />

            <h1>Photos Page</h1>

            <div className="photos">

                <img className="insta" src={example} alt="Example Photo" />
                <img className="insta" src={example} alt="Example Photo" />
                <img className="insta" src={example} alt="Example Photo" />
                <img className="insta" src={example} alt="Example Photo" />
                <img className="insta" src={example} alt="Example Photo" />
                <img className="insta" src={example} alt="Example Photo" />
            </div>

            <Link to="https://www.lakesidediamond.com">REFERENCE PAGE</Link>

        </div>
    );
};

export default Photos;