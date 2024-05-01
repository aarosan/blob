import React from "react";
import { Link } from "react-router-dom";
import Blob from "../components/Blob";
import { Canvas } from "@react-three/fiber";

import "./index.css";

const Blobs = ({ id, name, color }) => {


    return (
        <React.Fragment>

            <div className="blob-container">
                <div className="blob" >

                        <Canvas
                            camera={{ position: [0, 0, 10], fov: 100 }}
                        >
                            <Blob color={color}/>
                        </Canvas>

                        <div className="blob-name">
                            <Link to={`/blob/${name}`} className="blob-link">
                                <p>{name}</p>
                            </Link>                        
                        </div>
             
                </div>
            </div>

        </React.Fragment>
    )
}

export default Blobs;