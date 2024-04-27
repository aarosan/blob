import React from "react";
import { Helmet } from "react-helmet";
import Blob from "../components/Blob";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";


import './style/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const MyBlobs = () => {

    const test = () => {
        console.log('Add a Blob Button Pressed');
    }

    return (
        <React.Fragment>
            <Helmet>
                <title></title>
                <meta />
            </Helmet>

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
                

            </div>

            <div className="blob-container">
                <div className="blob" >
                    <Canvas
                        camera={{ position: [0, 0, 10], fov: 100 }}
                    >
                        <Blob />
                    </Canvas>
                </div>
            </div>



        </React.Fragment>
    )
}

export default MyBlobs;




