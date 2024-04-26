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

            <div className="page-content">
                <div className="title-container">
                    <h1>welcome to your mind</h1>
                </div>
                <div className="input-container">
                    <div className="email-container">
                        <input type="text" className="email-input" />
                    </div>
                    <div className="password-container">
                        <input type="text" className="password-input" />
                    </div>
                </div>
                <div className="link-btn-container">
                        <RouterButton
                        api="/"
                        text="enter" 
                        onClick={test}/>

                        <Link to="/signup" className="signup-link">sign up</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;