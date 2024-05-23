import './TaskCard.css'
import Badge from '../Badge/Badge'
import DataContainer from '../DataContainer/DataContainer';

const TaskCard = (props) => {

    const taskId = 'T-1';
    const badgeText = 'Todo';
    const taskContent = 'Create a Design System for Enum Workspace.'
    const taskDate = new Date(2022,5,23);


    
    return (
        <div className="task-card-container">
            <div className='task-card-header'>
                <p className='task-card-title'>{props.taskId}</p>
                <Badge badgeText={props.badgeText}/>
            </div>
            <div className='task-card-content'>
                <p>{props.taskContent}</p>
            </div>
            <div className='task-card-footer'>
                <DataContainer taskDate={props.taskDate} />
            </div>
        </div>
    )

}

export default TaskCard;