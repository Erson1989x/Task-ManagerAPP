import './Forms.css'
import React, { useState } from 'react'

const Form = (props) => {
 const [taskName, setTaskName] = useState('')
 const [taskDate, setTaskDate] = useState()
 const [taskDetails, setTaskDetails] = useState()

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
 setTaskName(e.target.value)
    }
     

 const handleDateChange = (e) => {
  //  setFormData((prev)=>({
  //      ...prev,
  //      taskDate: e.target.value
  //  }))
    setTaskDate(e.target.value)
 }

 const handleDetailsChange = (e) => {
  //  setFormData((prev)=>({
  //      ...prev,
  //      taskContent: e.target.value
  //  }))
    setTaskDetails(e.target.value)

 }
//  var 2
// const handleInputChange = (e) => {
//    setFormData((prev)=>({
//        ...prev,
//        [e.target.name]: e.target.value
//    }))
//    }

 const handleSubmit = (e) => {
    e.preventDefault()
   const newTask = {
        taskName: taskName,
        taskDate: taskDate,
        taskContent: taskDetails,
        badgeText: 'Todo'
    }
    
    props.propAddNewTask(newTask)
    console.log('newTask', newTask)
    setTaskDate('')  ///cleaning the form after submit
    setTaskName('')
    setTaskDetails('')

 }

    return (
        <div>
            <form onSubmit={handleSubmit}>
             <div className='form-container'>
                <label className='form-label-name'>Task Name</label>
                <input value={taskName} name='taskName' onChange={handleNameChange} className='form-input-name' type="text" />
             </div>
             <div className='form-container'>
                <label className='form-label-name'>Due Date</label>
                <input value={taskDate} name='taskDate' onChange={handleDateChange} className='form-input-name' type="date" />
             </div>
             <div className='form-container'>
                <label className='form-label-name'>Task Details</label>
                <textarea value={taskDetails} name='taskContent' onChange={handleDetailsChange} className='form-input-name'id="" cols="30" rows="10"></textarea>
             </div>

             <button className='form-button' type='submit'>Create Task</button>
            </form>
        </div>
    )
}

export default Form;