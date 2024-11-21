import { Link, useNavigate } from "react-router-dom";
import React, { useState, useCallback } from 'react';
import logo from '../assets/logo.png'

const Home: React.FC = () => {


    return (
        <div>
            <img className="logo" src={logo} alt="Lakeside Logo" />

            <header>
            <Link to="/Photos">Photos</Link>
            </header>

            <div>
                <h1>Instagram API</h1>
            </div>

            <div>
                <h1>Socials (Maybe in navbar?)</h1>
            </div>

            <div>
                <h1>Contact Form</h1>
            </div>
        </div>
    );
};

export default Home;