import React from "react";
import { Helmet } from "react-helmet";

import "./style/style.css";

import RouterButton from "../components/routerButton";

const Home = () => {
    
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

                <div className="login-signup-container">

                    <div className="btn-container">
                        <RouterButton
                        api="/login"
                        text="login" 
                        />
                    </div>
                    <div className="btn-container">
                        <RouterButton
                        api="/signup"
                        text="sign up" 
                        />
                    </div>

                        
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;