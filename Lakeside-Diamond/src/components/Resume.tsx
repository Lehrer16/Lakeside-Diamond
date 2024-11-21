import { useState } from "react";
import React from "react";
import Link from 'react';
import Footer from "./Footer";
import "./Resume.css"

const Resume = () => {
    return (
        <div className="main">
            <h1>Resume</h1>
            <h1>Front-End Proficiencies </h1>
            <ul>
                <li>
                    HTML
                </li>
                <li>
                    CSS
                </li>
                <li>
                    Javascript
                </li>
                <li>
                    Frameworks
                </li>
            </ul>
            <h1>Back-End Proficiencies</h1>
            <ul>
                <li>
                    React
                </li>
                <li>
                    SQL
                </li>
                <li>
                    NoSQL
                </li>
                <li>
                    Postgres
                </li>
                <li>
                    Mongoose
                </li>
            </ul>
            <div className="last">
            <h1>Below is a link for my resume, feel free to download!!</h1>
            <a href = '' download> My Resume</a>
            </div>
            
            <Footer />
        </div>
    )
    
}

export default Resume;