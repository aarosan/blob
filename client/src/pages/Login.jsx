import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "./style.css";

import RouterButton from "../components/routerButton";

const Login = () => {

    const test = () => {
        console.log('Enter Button Pressed');
    }
    return (
        <React.Fragment>
            <Helmet>
                <title></title>
                <meta />
            </Helmet>

            <div className="login-page-content">
                <div className="title-container">
                    welcome to your mind
                </div>

                <div className="input-container">

                    <div className="email-container">
                        <input type="text" className="email-input" placeholder="email"/>
                    </div>
                    
                    <div className="password-container">
                        <input type="text" className="password-input"
                        placeholder="password" />
                    </div>
                </div>
                <div className="link-btn-container">
                    <div className="btn-container">
                        <RouterButton
                        api="/"
                        text="enter" 
                        onClick={test}/>
                    </div>
                    <div className="link-container">
                        <Link to="/signup" className="signup-link">sign up</Link>
                    </div>
                       

                        
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;