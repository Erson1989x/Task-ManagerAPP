import TaskCard from '../TaskCard/TaskCard';
import './AppContainer.css'

const  AppContainer = (props) => {
    return (
        <div className='app-container'>
       {/*app-container-control-panal*/}
         <div className='control-panel-container'>
           <div>
               <h3 className='app-title'>Tasks</h3> 
               <p className='app-subtitle'>Your tasks in your space.</p>
            </div>
            <button onClick={props.onCreateModal} className='create-task-button'>Create Task</button>
         </div>

            <div className='task-app-container'>
                <div className='task-list-grid'>
                 {
                    props.taskList.map((task, index) => {
                        return (
                            <TaskCard key={index} taskId={task.taskId} badgeText={task.badgeText} taskContent={task.taskContent} taskDate={task.taskDate}/>
                        )
                    })
                 }
                 </div>
            </div>
        </div>
    )

}

export default AppContainer;