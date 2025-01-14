import React from 'react';
import logo from '../assets/logo.png';
import example from '../assets/example.jpg';
import Navbar from "../Components/Navbar";


const Photos: React.FC = () => {



    return (
        <div>

 
            <img className="logo" src={logo} alt="Lakeside Logo" />

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

export default Photos;