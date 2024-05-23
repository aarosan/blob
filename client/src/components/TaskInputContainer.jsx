import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskInputContainer = ({ index, task, onChange, onDelete }) => {
    const handleTaskChange = (field, value) => {
        onChange(index, field, value);
    };

    return (
        <div className="add-task-input-container" key={index}>
            <div className="task-name-container">
                <input 
                    type="text"
                    placeholder="task name"
                    className="task-name-input"
                    value={task.name}
                    onChange={(e) => handleTaskChange("name", e.target.value)}
                />
            </div>

            <div className="task-input-container-buttons">
                <div className="task-date-container">
                    <input 
                        type="date" 
                        value={task.date}
                        className="add-task-date-input"
                        onChange={(e) => handleTaskChange("date", e.target.value)}
                    />
                </div>
                <div className="task-delete-container">
                    <FontAwesomeIcon icon={faTrash} onClick={() => onDelete(index)} />
                </div>
            </div>
            

        </div>
    )
}

export default TaskInputContainer;