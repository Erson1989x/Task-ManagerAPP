
import './TaskCard.css'
import Badge from '../Badge/Badge'
import DataContainer from '../DataContainer/DataContainer';

const TaskCard = (props) => {



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