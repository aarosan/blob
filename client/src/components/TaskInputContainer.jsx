import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import '../pages/style/style.css';


const TaskInputContainer = ({ index, task, onChange, onDelete }) => {
    const handleTaskChange = (field, value) => {
        onChange(index, field, value);
    };

    return (
        <div className="task-input-container" key={index}>
            <div className="task-name-container">
                <input 
                    type="text"
                    placeholder="task name"
                    className="task-name-input"
                    value={task.name}
                    onChange={(e) => handleTaskChange("name", e.target.value)}
                />
            </div>
            <div className="task-date-container">
                <input 
                    type="date" 
                    value={task.date}
                    className="task-date-input"
                    onChange={(e) => handleTaskChange("date", e.target.value)}
                />
            </div>
            <div className="task-delete-container">
                <FontAwesomeIcon icon={faTrash} onClick={() => onDelete(index)} />
            </div>

        </div>
    )
}

export default TaskInputContainer;