import React from "react";
import { Helmet } from "react-helmet";

import "./style.css";

import RouterButton from "../components/routerButton";

const Signup = () => {

    const test = () => {
        console.log('Enter Button Pressed');
    }
    return (
        <React.Fragment>
            <Helmet>
                <title></title>
                <meta />
            </Helmet>

            <div className="signup-page-content">
                <div className="title-container">
                    sign up
                </div>
                <div className="input-container">
                    <div className="first-name-container">
                        <input type="text" className="first-name-input" placeholder="first name"/>
                    </div>
                    <div className="last-name-container">
                        <input type="text" className="last-name-input"
                        placeholder="last name" />
                    </div>
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
                        text="sign up" 
                        onClick={test}/>
                    </div>    
                </div>
            </div>
        </React.Fragment>
    )
}

export default Signup;