import React from 'react'
import './ControlPanel.css'
import Modal from '../Modal/Modal.jsx'
import Form from '../Forms/Forms.jsx'
import TaskFilter from '../TaskFilter/TaskFilter.jsx'


const ControlPanel = (props) => {

  const { isOpen, setIsOpen, addNewTask, taskList } = props;

    const openModal = () => {
        setIsOpen(true)
      }
    
      const closeModal = () => {
        setIsOpen(false)
      }
    
      const handleTaksAdd = (task) => {
        addNewTask(task)
        closeModal()
      }
    return (
       
        <div className='control-panel-container'>
        <div>
            <h3 className='app-title'>Tasks</h3> 
            <p className='app-subtitle'>Your tasks in your space.</p>
         </div>
         { taskList.length > 0 && (
         <button onClick={openModal} className='create-task-button'>Create Task</button>
         )}
         <div>
        <TaskFilter todoItems={taskList} />
         </div>
         <Modal onClose={closeModal} isOpen={isOpen}>
         <h3>Create task</h3>
         <Form propAddNewTask={handleTaksAdd}/>
         </Modal>
      </div>
    )
}

export default ControlPanel