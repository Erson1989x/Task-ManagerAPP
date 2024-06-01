import TaskCard from '../TaskCard/TaskCard';
import './AppContainer.css'

const  AppContainer = (props) => {
    return (
        <div className='app-container'>
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