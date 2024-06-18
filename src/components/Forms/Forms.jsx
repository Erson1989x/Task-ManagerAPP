import "./Forms.css";
import React, { useState, useEffect } from "react";
import clsx from "clsx";

const Form = (props) => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [formValidation, setFormValidation] = useState({
    taskName: '',
    taskDate: '',
    taskDetails: '',
    isValid: true,
  });

  useEffect(() => {
   let taskNameErrorMessage = '';
   let taskDateErrorMessage = '';
   let taskDetailsErrorMessage = '';
   let isFormValid = true

   if (taskName.length === 0) {
     taskNameErrorMessage = 'Task name is required';
     isFormValid = false;
   }
   if (taskDate.length === 0) {
     taskDateErrorMessage = 'Task date is required';
   }
   if (taskDetails.length === 0) {
     taskDetailsErrorMessage = 'Task details are required';
   }

   setFormValidation({taskName: taskNameErrorMessage, taskDate: taskDateErrorMessage, taskDetails: taskDetailsErrorMessage, isValid: isFormValid});

  }, [taskName, taskDate, taskDetails]);


  /*const [formData , setFormData] = useState({
    taskName: '',
    taskDate: '',
    taskContent: '',
    badgeText: 'Todo'
  })*/

  //var 1
  const handleNameChange = (e) => {
    //setFormData((prev)=>({
    //        ...prev,
    //        taskName: e.target.value

    //    }))
    setTaskName(e.target.value);
  };

  const handleDateChange = (e) => {
    //  setFormData((prev)=>({
    //      ...prev,
    //      taskDate: e.target.value
    //  }))
    setTaskDate(e.target.value);
  };

  const handleDetailsChange = (e) => {
    //  setFormData((prev)=>({
    //      ...prev,
    //      taskContent: e.target.value
    //  }))
    setTaskDetails(e.target.value);
  };
  //  var 2
  // const handleInputChange = (e) => {
  //    setFormData((prev)=>({
  //        ...prev,
  //        [e.target.name]: e.target.value
  //    }))
  //    }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      taskName: taskName,
      taskDate: new Date(taskDate),
      taskContent: taskDetails,
      badgeText: "Todo",
    };

    props.propAddNewTask(newTask);
    console.log("newTask", newTask);
    setTaskDate(""); ///cleaning the form after submit
    setTaskName("");
    setTaskDetails("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label className="form-label-name">Task Name</label>
          <input
            value={taskName}
            name="taskName"
            onChange={handleNameChange}
          //  {/*className={`form-input-name ${formValidation.taskName ? 'error' : ''}`} */}
            className={clsx("form-input-name", {
              error: formValidation.taskName,
            })}
            type="text"
          />
          <p className="error-message">{formValidation.taskName}</p>
        </div>
        <div className="form-container">
          <label className="form-label-name">Due Date</label>
          <input
            value={taskDate}
            name="taskDate"
            onChange={handleDateChange}
            className={clsx("form-input-name", {
              error: formValidation.taskDate,
            })}
            type="date"
          />
             <p className="error-message">{formValidation.taskDate}</p>
        </div>
        <div className="form-container">
          <label className="form-label-name">Task Details</label>
          <textarea
            value={taskDetails}
            name="taskContent"
            onChange={handleDetailsChange}
            className={clsx("form-input-name", {
              error: formValidation.taskDetails,
            })}
            id=""
            cols="30"
            rows="10"
          ></textarea>
             <p className="error-message">{formValidation.taskDetails}</p>
        </div>

        <button disabled={!formValidation.isValid} className="form-button" type="submit">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default Form;
