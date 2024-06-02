
import './TaskCard.css'
import Badge from '../Badge/Badge'
import DateContainer from '../DateContainer/DateContainer'

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
                <DateContainer taskDate={props.taskDate} />
            </div>
        </div>
    )

}

export default TaskCard;