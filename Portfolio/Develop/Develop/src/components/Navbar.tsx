import React from "react";
import {Link} from "react-router-dom";
import  "./Navbar.css";
import {Routes, Route} from 'react-router-dom';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from "./Portfolio";
import Resume from "./Resume";






const Navbar = () => {
    return (
        <nav className="styles-navbar">
            <a className = "styles-title" href = '/'>Portfolio</a>
            <div className="styles-menu">
                <div className="styles-menu-items">
                    <div className="about_me">
                        <Link to = "/">About me</Link>
                    </div>
                    <div className="portfolio">
                        <Link to = "/portfolio">Portfolio</Link>
                    </div>
                    <div className="contact">
                        <Link to = "/contact">Contact</Link>
                    </div>
                    <div className="resume">
                        <Link to = "/resume">Resume</Link>
                    </div>
                </div>

                <Routes>
                    <Route path = "/" element = {<AboutMe/>}/>
                    <Route path = "/portfolio" element = {<Portfolio/>}/>
                    <Route path = "/contact" element = {<Contact/>}/>
                    <Route path = "/resume" element = {<Resume/>}/>

                </Routes>
            </div>
        </nav>

    );
};

export default Navbar;

