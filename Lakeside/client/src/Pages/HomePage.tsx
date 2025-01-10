import { Link, useNavigate } from "react-router-dom";
import React, { useState, useCallback, useRef } from 'react';
import logo from '../assets/logo.png';
import example from '../assets/example.jpg';
import { Button } from "../Components/ui/button";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handlePhotosClick = useCallback(() => {
        navigate("/Photos");
    }, [navigate]);

    const handleHomeClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    return (
        <div>
            <div>
                <Link to="https://www.lakesidediamond.com">REFERENCE PAGE</Link>
            </div>  
            
            <img className="logo" src={logo} alt="Lakeside Logo" />

            <header>
                <Button ref={buttonRef} onClick={handlePhotosClick} className="links" variant="outline">Photos</Button>
                <Button ref={buttonRef} className="links" variant="outline">Instagram</Button>
            </header>

            <div>
                <h1>Instagram API</h1>
                <img className="instaAPI" src={example} alt="Example Photo" />
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
