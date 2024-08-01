import React, { useContext } from "react";
import "./TaskFilter.css";
import { TaskContext } from "../../App";
import { StatusContext } from "../TaskViewer/AppContainer";
import FilterItem from "./FilterItem";

const TaskFilter = () => {
  const todoItems = useContext(TaskContext);
  const { selectedStatus, setSelectedStatus } = useContext(StatusContext);

  const taskFilterItems = ["All Tasks", "Completed", "Pending"];

  const getCountByStatus = (status) => {
    // Implement the logic to get the count based on the status
    // Return the count
    if (status === "All Tasks") {
      return todoItems.length;
    } else if (status === "Completed") {
      return todoItems.filter((item) => item.completed).length;
    } else if (status === "Pending") {
      return todoItems.filter((item) => !item.completed).length;
    }
  };

  return (
    <div className="task-filter-container">
      {taskFilterItems.map((item, index) => (
        <FilterItem
          key={item}
          label={item}
          count={getCountByStatus(item)}
          statusClick={() => setSelectedStatus(item)}
          active={index === 0}
        />
      ))}
    </div>
  );
};

export default TaskFilter;