
import './TaskCard.css'
import Badge from '../Badge/Badge'
import DateContainer from '../DateContainer/DateContainer'

const TaskCard = ({taskId, badgeText, taskContent, taskDate}) => {



    return (
        <div className="task-card-container">
            <div className='task-card-header'>
                <p className='task-card-title'>{taskId}</p>
                <Badge badgeText={badgeText}/>
            </div>
            <div className='task-card-content'>
                <p>{taskContent}</p>
            </div>
            <div className='task-card-footer'>
                <DateContainer taskDate={taskDate} />
            </div>
        </div>
    )

}

export default TaskCard;