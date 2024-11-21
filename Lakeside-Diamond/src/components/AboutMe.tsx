import React from "react";
import "./AboutMe.css"
import Footer from "./Footer";

const Aboutme = () => {
    return (
        <div className="container">
            <div className="content">
                <h1>About Me</h1>
                <p>
                    I'm a full-stack developer with 1 year of experience coding in HTML, CSS, Javascript, NodeJS, and more! Reach out to me if you'd like to learn more!
                </p>
                <a href='mailto:ibrew919@gmail.com'>Contact Me</a>
            </div>
            <div>
                <Footer />
            </div>
        </div>

    );
};

export default Aboutme;