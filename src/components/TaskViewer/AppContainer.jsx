import ControlPanel from '../ControlPanel/ControlPanel';
import TaskCard from '../TaskCard/TaskCard';
import './AppContainer.css'
import React from 'react'


const  AppContainer = (props) => {

  const todoItems = props.taskList.filter((task) => task.badgeText === 'Todo')

    return (
        <div className='app-container'>
       {/*app-container-control-panal*/}
        <ControlPanel addNewTask={props.addNewTask}/>
            <div className='task-app-container'>
                <div className='task-list-grid'>
                 {
                    todoItems.map((task, index) => {
                        return (
                            <TaskCard key={task.taskId} taskId={task.taskId} badgeText={task.badgeText} taskContent={task.taskContent} taskDate={task.taskDate}/>
                        )
                    })
                 }
                 </div>
            </div>
        </div>
    )

}

export default AppContainer;