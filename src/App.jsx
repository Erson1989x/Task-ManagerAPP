import React from 'react';
import { useState } from 'react';
import './App.css';
import AppContainer from './components/TaskViewer/AppContainer.jsx';
import Form from './components/Forms/Forms.jsx';
import Modal from './components/Modal/Modal.jsx';

const taskData = [
  {
    taskId: 'T-1',
    badgeText: 'Todo',
    taskContent: 'Create a Design System for Enum Workspace.',
    taskDate: new Date(2022,5,23)
},

{
  taskId: 'T-2',
  badgeText: 'In Progress',
  taskContent: 'lorem ipsum lorem ipsum lorem ipsum',
  taskDate: new Date(2022,5,24)
},

{
  taskId: 'T-3',
  badgeText: 'Completed',
  taskContent: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  taskDate: new Date(2022,5,25)
},

{
  taskId: 'T-4',
  badgeText: 'Done',
  taskContent: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  taskDate: new Date(2022,5,25)
},

{
  taskId: 'T-5',
  badgeText: 'Pending',
  taskContent: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  taskDate: new Date(2022,5,25)
},

{
  taskId: 'T-6',
  badgeText: 'In Progress',
  taskContent: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
  taskDate: new Date(2022,5,25)
}
]

const App =() => {
  const [taskList , setTaskList] = useState(taskData)


  const addNewTask = (newTask) => {
    console.log('newTask', newTask)

    setTaskList((prev) => [
      ...prev,
      {
        ...newTask,
        taskData: new Date(newTask),
        taskId: `T-${prev.length + 1}`
      }
    ])
  }


  return (
  
    <div className='app-card-container'>
      <div className='app-card-header'>
        <h3>Task Manager</h3>
        <AppContainer addNewTask={addNewTask} taskList={taskList}/>
      </div>

    </div>
  );
};



export default App;
