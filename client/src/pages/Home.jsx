import React from "react";
import { Helmet } from "react-helmet";

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
        </React.Fragment>
    )
}

export default Home;