import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Blobs from "../components/blobs";
import { Link } from "react-router-dom";


import './style/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const MyBlobs = () => {
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        // Simulating loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Adjust the timeout duration as needed

        return () => clearTimeout(timer);
    }, []);

    const test = () => {
        console.log('Add a Blob Button Pressed');
    }

    return (
        <React.Fragment>
            <Helmet>
                <title></title>
                <meta />
            </Helmet>

            {isLoading && <div className="loading">Loading...</div>}
            
            {!isLoading && (
                <div className="page-content">
                    <div className="nav-bar">
                        <div className="left-nav">
                            <div className="page-title">
                                Blobs
                            </div>
                        </div>
                        <div className="right-nav">
                            <div className="link-container">
                                <Link to="/login" className="signout-link">sign out</Link>
                            </div>
                            <div className="add-blob-btn">
                                <FontAwesomeIcon icon={faPlus} onClick={test} />
                            </div>
                        </div>
                    </div>

                    <div className="blob-container">
                        <div className="row">
                            <div className="blob">
                                <Blobs name={'coding'} color={'blue'} />
                            </div>
                            <div className="blob">
                                <Blobs name={'life'} color={'red'} />
                            </div>
                            <div className="blob">
                                <Blobs name={'writing'} color={'green'} />
                            </div>
                            <div className="blob">
                                <Blobs name={'grocery'} color={'purple'} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="blob">
                                <Blobs name={'exercise'} color={'yellow'} />
                            </div>
                            <div className="blob">
                                <Blobs name={'school'} color={'orange'} />
                            </div>
                            <div className="blob">
                                <Blobs name={'gardening'} color={'pink'} />
                            </div>
                        </div>
                    </div>
                </div>
            )}




        </React.Fragment>
    )
}

export default MyBlobs;




