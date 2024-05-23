import './DataContainer.css'

const DataContainer = (props) => {
    return (
        <div>
            <p className='task-card-footer-text'>Due Date</p>
            <p className='task-card-footer-date'>{props.taskDate.toLocaleDateString()}</p>
        </div>
    )
}

export default DataContainer