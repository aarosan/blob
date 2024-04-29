import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

const RouterButton = ({ api, text, state = null, onClick }) => {

    const navigate = useNavigate();

    const handleClick = async () => {
        navigate(api, { state: state });
        if (onClick) {
            await onClick();
        }
        navigate(api, { state: state });
    }
    
    return (
        <React.Fragment>

            <div className="btn-container">
                <button className="add-course-btn" onClick={handleClick}>
                    <div className="btn-name">
                        {text}
                    </div>
                </button>
            </div>

        </React.Fragment>
    )
}

export default RouterButton;
