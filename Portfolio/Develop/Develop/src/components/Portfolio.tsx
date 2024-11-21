import React from "react";
import Footer from "./Footer";
import "./AboutMe.css";

function Portfolio () {
    return (
        <div className="container">
            <h1 className = "portfolioTitle">Projects</h1>
            <p>Below is a showcase of all the projects that I've completed so far, feel free to take a look at the projects and interact with the websites themselves.</p>
            <div className="project">
            <img src="src/assets/Screenshot 2024-11-20 195115.jpg" />
            <a href="https://github.com/jmayoung/Proj_2" target = "blank">Project 2</a>
            
            </div>

            <div className="project">
                <img src = "src/assets/Screenshot 2024-11-20 200321.png" />
                <a href="https://github.com/pboyer306/coding-gardners" target = "blank">Project 1</a>
            </div>


            <Footer />
        </div>
    )
}

export default Portfolio;