import React, {useContext} from 'react'
import './TaskFilter.css'
import FilterItem from './FilterItem'
import { TaskContext } from '../../App'
import {StatusContext} from '../TaskViewer/AppContainer'


const taskFilterItems = [
    'All Tasks',
    'Todo',
    'In Progress',
    'Pending',
    'Completed',
]

const TaskFilter = () => {
  const todoItems = useContext(TaskContext)
  const {selectedStatus, setSelectedStatus} = useContext(StatusContext)

const getCountByStatus = (status) => {
  return todoItems.filter((item) => {
    if(status === 'All Tasks') {
        return true
    }
    return item.status === status;
  }).length
}

  return (
    <div className='task-filter-container'>
        {taskFilterItems.map((item, index) => (
            <FilterItem active={index === 0} key={item} label={item} count ={getCountByStatus(item)} statusClick={() => setSelectedStatus(item)}  />
        ))}
    </div>
  )
}

export default TaskFilter