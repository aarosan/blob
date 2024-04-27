import React from "react";
import Blob from "../components/Blob";
import { Canvas } from "@react-three/fiber";

import "./index.css";

const Blobs = ({ name, color }) => {


    return (
        <React.Fragment>

            <div className="blob-container">
                <div className="blob" >
                    <a href="/signup"> 

                        <Canvas
                            camera={{ position: [0, 0, 10], fov: 100 }}
                        >
                            <Blob color={color}/>
                        </Canvas>

                        <div className="blob-name">
                            <p>{name}</p>
                        </div>
                    </a>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Blobs;