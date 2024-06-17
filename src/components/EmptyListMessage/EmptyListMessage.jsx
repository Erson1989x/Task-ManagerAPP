import React from 'react';
import taskIcon from '../../assets/icons/tasks-icon.png';
import './EmptyListMessage.css';

const EmptyListMessage = (props) => {
    return (
        <div className='empty-list-message-container'>
            <div className='empty-list-message'>
                <img className="task-logo" src={taskIcon} alt="icon" />
                <h3 className="app-title">No Tasks Yet</h3>
                <p className="app-subtitle"> Get productive. Creat a task to get started</p>
                <button onClick={() => props.OnCreateTaskClick(true)} className='create-task-button'>Create Task</button>
            </div>
        </div>
    )
}

export default EmptyListMessage;