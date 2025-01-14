import React from 'react';
import logo from '../assets/logo.png';
import Navbar from "../Components/Navbar";
import LoginForm from '../Components/Login Form';


const Login: React.FC = () => {



    return (
        <div>

            <img className="logo" src={logo} alt="Lakeside Logo" />

            <Navbar showHomeButton={true} showPhotosButton={true} showInstagramButton={true} />

            
            <LoginForm />


        </div>
    );
};

export default Login;