import React from "react";
import { Helmet } from "react-helmet";
import Blob from "../components/Blob";
import { Canvas } from "@react-three/fiber";

const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title></title>
                <meta />
            </Helmet>

            <div className="page-content">
                Hello!
            </div>

            <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
                <Blob />

            </Canvas>

        </React.Fragment>
    )
}

export default Home;




