import './DataContainer.css'

const DataContainer = (props) => {

    const formattedDate = props.taskDate instanceof Date ? props.taskDate.toLocaleDateString() : '';


    return (
      <div className='task-card-date'>
        <p>Due Date</p>
        <p>{formattedDate}</p>
      </div>
    );
  };

export default DataContainer