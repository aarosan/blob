import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import Auth from '../utlis/auth'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';


import './style/home.css';


const BlobDetails = () => {
    const navigate = useNavigate();
    const { blobName } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [blobsDataDetails, setBlobsDataDetails] = useState([]);
    const [color, setColor] = useState("");
    const [taskName, setTaskName] = useState("");
    const [date, setDate] = useState("");

    console.log(blobName);

    const colorMapping = {
        blue: "#C6DEF1",
        green: "#C9E4DE",
        purple: "#EDE6F7",
        orange: "#FFE3CF",
        yellow: "#FAEDCB",
        pink: "#F2C6DE",
        red: "#FFC6C6"
    };


    useEffect(() => {
        getAllTasks();
    }, []);

    const getAllTasks = () => {
        console.log(`THIS IS THE GETALLTASKS REQUEST: Bearer ${Auth.getToken()}`
    )
        fetch(`http://localhost:4000/users/blobs/${blobName}/tasks`, {
            headers: {
                Authorization: `Bearer ${Auth.getToken()}`
            }
        })
        .then(response => {
            console.log('FETCH RESPONSE:', response)
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('THIS IS THE DATA FROM GET ALL TASKS:', data)
            setBlobsDataDetails(data.tasks);
            setColor(colorMapping[data.color]);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Error fetching blobs data:', error);
        })
    }

    console.log('THIS IS THE BLOB COLOR', color);


    const handleAddTask = async () => {
        console.log('Add a Task Button Pressed');

        try {
            const userId = Auth.getUserId();
            console.log('ADDTASKS USERID', userId);

            const response = await fetch(`http://localhost:4000/users/blobs/${blobName}/tasks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Auth.getToken()}`
                },
                body: JSON.stringify({ taskName: taskName, date, userId })
            });

            console.log('Response Status:', response.status);

            if (response.ok) {
                setBlobsDataDetails([...blobsDataDetails, { name: taskName, date }]);
                // Clear input fields after adding task
                setTaskName("");
                setDate("");
                console.log("Add a task Successful");   
                getAllTasks();        
            } else {
                console.error("Failed to create task:", response.statusText);
            }
        } catch (error) {
            console.error("Error adding a task:", error.message);
        }    
    }

    const handleMyBlobs = () => {
        console.log('My Blobs Button Pressed');
        navigate('/myBlobs');
    }

    const handleDeleteTask = async (taskId) => {
        try {
            const response = await fetch(`http://localhost:4000/users/blobs/${blobName}/tasks/${taskId}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${Auth.getToken()}`
                }
            });

            if (response.ok) {
                // Task deleted successfully
                // Refresh tasks after deletion
                getAllTasks();
                console.log("Task deleted successfully");
            } else {
                // Failed to delete task
                console.error("Failed to delete task:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting task:", error.message);
        }
    };


    return (
        <React.Fragment>
            <Helmet>
                <title></title>
                <meta />
            </Helmet>


        <div className="blob-details-page-container" >
            <div className="nav-bar">
                <div className="left-nav">
                    <div className="page-title">
                        {blobName}
                    </div>
                </div>
                <div className="right-nav">
                    <div className="link-container">
                        <div className="my-blobs-btn">
                            <FontAwesomeIcon icon={faHouse} onClick={handleMyBlobs} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="task-container">
                    {blobsDataDetails.map((task, index) => (
                        <div key={index} className="task">
                            {/* Circle to mark task as completed */}
                            <div className="task-circle" onClick={() => handleDeleteTask(task._id)}>
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </div>
                            {/* Task name */}
                            <div className="task-name">{task.name}</div>
                            {/* Vertical line */}
                            <div className="vertical-line"></div>
                            {/* Date */}
                            <div className="task-date">{task.date}</div>
                        </div>
                    ))}
            </div>

            <div className="task-input-container">
                <div className="task-name-container">
                    <input 
                        type="text"
                        placeholder="task name"
                        className="task-name-input"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                </div>
                <div className="task-date-container">
                    <input 
                        type="date" 
                        value={date}
                        className="task-date-input"
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="task-add-container">
                        <button onClick={handleAddTask}>Add Task</button>
                    </div>

            </div>  

            
        </div>

        <style>
            {`
            body {
                background-color: ${color};
            }
            `}
        </style>



        </React.Fragment>
    )
}

export default BlobDetails;




