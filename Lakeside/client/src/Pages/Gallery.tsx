"use client";
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../assets/logo.png';
import example from '../assets/example.jpg';
import Navbar from "../Components/Navbar";
import '../CSS/Gallery.css';


const Gallery: React.FC = () => {



    return (
        <div>

 
            <Link to="/">
                <img className="logo" src={logo} alt="Lakeside Logo" />
            </Link>

            <Navbar showPhotosButton={false} />

            <h1 className='todo'>Photo Browser</h1>



            <div className="photos">

                <img className="insta" src={example} alt="Example Photo" />
                <img className="insta" src={example} alt="Example Photo" />
                <img className="insta" src={example} alt="Example Photo" />
                <img className="insta" src={example} alt="Example Photo" />
                <img className="insta" src={example} alt="Example Photo" />
                <img className="insta" src={example} alt="Example Photo" />
            </div>
            

            <a className='todo' href="https://www.lakesidediamond.com" target="_blank" rel="noopener noreferrer">REFERENCE PAGE</a>


        </div>
    );
};

export default Gallery;