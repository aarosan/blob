import React from "react";
import { Helmet } from "react-helmet";
import Blob from "../components/Blob";
import { Canvas } from "@react-three/fiber";

import './style.css';

const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title></title>
                <meta />
            </Helmet>

            <div className="page-content">
                Blobs
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

export default Home;




