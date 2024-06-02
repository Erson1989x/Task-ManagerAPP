import './DateContainer.css'

const DateContainer = (props) => {

 


    return (
      <div className='task-card-date'>
        <p>Due Date</p>
        <p>{props.taskDate.toLocaleDateString()}</p>
      </div>
    );
  };

export default DateContainer