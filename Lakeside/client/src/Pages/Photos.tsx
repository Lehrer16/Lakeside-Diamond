import { Link, useNavigate } from "react-router-dom";
import React, { useState, useCallback } from 'react';
import logo from '../assets/logo.png'

const Photos: React.FC = () => {


    return (
        <div>
            <img className="logo" src={logo} alt="Lakeside Logo" />

            <header>
                <div>
                    <Link to="/">Home</Link>
                </div>  
            </header>

            <div className="loginBox">
                <h1>Photos Page</h1>
            </div>
            
        </div>
    );
};

export default Photos;