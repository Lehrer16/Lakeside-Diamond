import { Link } from "react-router-dom";
import React from 'react';
import logo from '../assets/logo.png';
import example from '../assets/example.jpg';
import Navbar from "../Components/Navbar";


const Login: React.FC = () => {



    return (
        <div>

            <Link to="https://www.lakesidediamond.com">REFERENCE PAGE</Link>
 
            <img className="logo" src={logo} alt="Lakeside Logo" />

            <h1>Login Page</h1>

            <Navbar showHomeButton={true} showPhotosButton={false} showInstagramButton={true} />

            <h1>Photos Page</h1>

            <div className="photos">

                <img className="insta" src={example} alt="Example Photo" />
                <img className="insta" src={example} alt="Example Photo" />
                <img className="insta" src={example} alt="Example Photo" />
                <img className="insta" src={example} alt="Example Photo" />
                <img className="insta" src={example} alt="Example Photo" />
                <img className="insta" src={example} alt="Example Photo" />
            </div>

        </div>
    );
};

export default Login;