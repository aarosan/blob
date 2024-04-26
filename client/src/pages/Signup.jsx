import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Auth from '../utlis/auth';

import "./style/style.css";

import RouterButton from "../components/routerButton";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        console.log('Sign Up Button Pressed');

        try {
            console.log(firstName, lastName, email, password);
            const response = await fetch("http://localhost:4000/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ firstName, lastName, email, password })
            });

            console.log('Response Status:', response.status);

            console.log("Signup successful");

            if (response.ok) {
                const responseData = await response.json();
                const token = responseData.token;
    
                Auth.login(token); 
    
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
    
        } catch (error) {
            console.error("Error signing up:", error.message);
        }
    };

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
                        <input type="text" className="first-name-input" placeholder="first name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className="last-name-container">
                        <input type="text" className="last-name-input"
                        placeholder="last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className="email-container">
                        <input type="text" className="email-input" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="password-container">
                        <input type="text" className="password-input"
                        placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="link-btn-container">
                    <div className="btn-container">
                        <RouterButton
                        api="/"
                        text="sign up" 
                        onClick={handleSignup}/>
                    </div>    
                </div>
            </div>
        </React.Fragment>
    )
}

export default Signup;