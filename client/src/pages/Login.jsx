import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Auth from '../utlis/auth';

import "./style/style.css";

import RouterButton from "../components/routerButton";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = async () => {
        console.log('Enter Button Pressed');

        try {
            console.log(email, password);
            const response = await fetch("http://localhost:4000/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            console.log('Response Status:', response.status);


            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }

            const responseData = await response.json();
            const token = responseData.token;

            Auth.login(token); 

            console.log("Login successful");
        } catch (error) {
            console.error("Error logging in:", error.message);
        }
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
                        <input type="text" className="email-input" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    
                    <div className="password-container">
                        <input type="text" className="password-input"
                        placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="link-btn-container">
                    <div className="btn-container">
                        <RouterButton
                        api="/"
                        text="enter" 
                        onClick={handleLogin}/>
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