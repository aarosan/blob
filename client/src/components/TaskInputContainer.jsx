import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


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
                    value={task.text}
                    onChange={(e) => handleTaskChange("text", e.target.value)}
                />
            </div>
            <div className="task-date-container">
                <input 
                    type="date" 
                    value={task.date}
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