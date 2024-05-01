import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Auth from '../utlis/auth'; 
import TaskInputContainer from "../components/TaskInputContainer";
import RouterButton from "../components/routerButton";

import "./style/style.css";

const AddBlobs = () => {
    const navigate = useNavigate();

    const [blobName, setBlobName] = useState("");
    const [blobColor, setBlobColor] = useState("");
    const [blobTasks, setBlobTasks] = useState([]);


    const handleCreateBlob = async () => {
        console.log('Create Blob button pressed');
        console.log('Auth.getToken', Auth.getToken())
        console.log( blobName, blobColor, blobTasks );

        try {
            const userId = Auth.getUserId();
            const response = await fetch("http://localhost:4000/users/blobs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Auth.getToken()}`
                },
                body: JSON.stringify({ name: blobName, color: blobColor, tasks: blobTasks, userId })
            });

            console.log('Response Status:', response.status);

            if (response.ok) {
                console.log("Add a Blob Successful");
                navigate('/myBlobs');
            } else {
                console.error("Failed to create blob:", response.statusText);
            }
        } catch (error) {
            console.error("Error adding a blob:", error.message);
        }
    };

    const addTaskInput = () => {
        setBlobTasks([...blobTasks, { text: "", date: ""}]);
    };

    const handleTaskChange = (index, field, value) => {
        const newTasks = [...blobTasks];
        newTasks[index][field] = value;
        setBlobTasks(newTasks);
    };

    const deleteTaskInput = (index) => {
        const newTasks = blobTasks.filter((tasks, i) => i !== index);
        setBlobTasks(newTasks);
    }

    return (
        <React.Fragment>
            <Helmet>
                <title></title>
                <meta />
            </Helmet>

            <div className="addblob-page-content">
                <div className="title-container">
                    add a blob
                </div>

                <div className="blob-input-container">
                    <div className="blob-name-container">
                        <input type="text" className="blob-name-input" placeholder="blob name" value={blobName} onChange={(e) => setBlobName(e.target.value)}/>
                    </div>
                    <div className="blob-color-container">
                        <select className="blob-color-input" value={blobColor} onChange={(e) => setBlobColor(e.target.value)}>
                            <option value="">Select Color</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="purple">Purple</option>
                            <option value="orange">Orange</option>
                            <option value="yellow">Yellow</option>
                            <option value="pink">Pink</option>
                            <option value="red">Red</option>
                        </select>
                    </div>
                </div>

                {/* Task input containers */}
                {blobTasks.map((task, index) => (
                    <TaskInputContainer
                        key={index}
                        index={index}
                        task={task}
                        onChange={handleTaskChange}
                        onDelete={deleteTaskInput}
                    />
                ))}

                {/* Add Task button */}
                <div className="add-task-container">
                    <button onClick={addTaskInput}>Add Task</button>
                </div>


                <div className="link-btn-container">
                    <div className="btn-container">
                        <RouterButton
                        text="create blob" 
                        onClick={handleCreateBlob}/>
                    </div>    
                </div>
            </div>
        </React.Fragment>
    )
}

export default AddBlobs;