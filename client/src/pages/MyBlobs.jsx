import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Blobs from "../components/blobs";
import { Link } from "react-router-dom";
import Auth from '../utlis/auth'; 


import './style/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const MyBlobs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [blobsData, setBlobsData] = useState([]);

    useEffect(() => {
        // Check if user is authenticated
        if (Auth.isAuthenticated()) {
            getAllBlobs();
        }
    }, []);


    const getAllBlobs = () => {
        console.log(`THIS IS THE GETALLBLOBS REQUEST: Bearer ${Auth.getToken()}`
    )
        fetch("http://localhost:4000/users/blobs", {
            headers: {
                Authorization: `Bearer ${Auth.getToken()}`
            }
        })
        .then(response => {
            console.log('FETCH RESPONSE:', response)
            if(!response.ok) {
                throw new Error('Network respionse was not ok');
            }
            return response.json();
        })
        .then(data => {
            setBlobsData(data.blobs);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Error fetching blobs data:', error);
            
        })
    }

    const handleSignOut = () => {
        Auth.logout();
    };

    const test = () => {
        console.log('Add a Blob Button Pressed');
    }

    function chunks(array, size) {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
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
                                <Link to="/" className="signout-link" 
                                onClick={handleSignOut}
                                >sign out</Link>
                            </div>
                            <div className="add-blob-btn">
                                <FontAwesomeIcon icon={faPlus} onClick={test} />
                            </div>
                        </div>
                    </div>
                    <div className="blob-container">
                        {chunks(blobsData, 4).map((row, rowIndex) => (
                            <div key={rowIndex} className="row">
                                {row.map((blob, index) => (
                                    <div key={index} className="blob">
                                        <Blobs name={blob.name} color={blob.color} />
                                    </div>
                                ))}
                                {/* Add empty blobs to fill in the row */}
                                {Array.from({ length: 4 - row.length }).map((_, emptyIndex) => (
                                    <div key={emptyIndex} className="empty-blob"></div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}




        </React.Fragment>
    )
}

export default MyBlobs;




