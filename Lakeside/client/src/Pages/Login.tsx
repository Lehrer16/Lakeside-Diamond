import React from 'react';
import logo from '../assets/logo.png';
import Navbar from "../Components/Navbar";
import LoginForm from '../Components/Login Form';
import { Link } from 'react-router-dom';


const Login: React.FC = () => {



    return (
        <div>

            <Link to="/">
                <img className="logo" src={logo} alt="Lakeside Logo" />
            </Link>

            <Navbar showHomeButton={true} showPhotosButton={true} showInstagramButton={true} />

            
            <LoginForm />


        </div>
    );
};

export default Login;