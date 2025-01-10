import { Link, useNavigate } from "react-router-dom";
import React, { useState, useCallback, useRef } from 'react';
import logo from '../assets/logo.png';
import example from '../assets/example.jpg';
import { Button } from "../Components/ui/button";

const Photos: React.FC = () => {

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
                <Button ref={buttonRef} onClick={handleHomeClick} className="links" variant="outline">Home</Button>
                <Button ref={buttonRef} className="links" variant="outline">Instagram</Button>
            </header>
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

export default Photos;