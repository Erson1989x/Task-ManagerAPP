import React from 'react'
import { useState } from 'react'
import './ControlPanel.css'
import Modal from '../Modal/Modal.jsx'
import Form from '../Forms/Forms.jsx'


const ControlPanel = (props) => {
    const [isOpen, setIsOpen] = useState(false);


    const openModal = () => {
        setIsOpen(true)
      }
    
      const closeModal = () => {
        setIsOpen(false)
      }
    
      const handleTaksAdd = (task) => {
        props.addNewTask(task)
        closeModal()
      }
    return (
       
        <div className='control-panel-container'>
        <div>
            <h3 className='app-title'>Tasks</h3> 
            <p className='app-subtitle'>Your tasks in your space.</p>
         </div>
         <button onClick={openModal} className='create-task-button'>Create Task</button>
         <Modal onClose={closeModal} isOpen={isOpen}>
         <h3>Create task</h3>
         <Form propAddNewTask={handleTaksAdd}/>
         </Modal>
      </div>
    )
}

export default ControlPanel