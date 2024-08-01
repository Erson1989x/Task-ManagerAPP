import React, { useState, createContext } from "react";
import ControlPanel from "../ControlPanel/ControlPanel";
import TaskCard from "../TaskCard/TaskCard";
import EmptyListMessage from "../EmptyListMessage/EmptyListMessage";
import "./AppContainer.css";

export const StatusContext = createContext();

const AppContainer = ({ taskList, addNewTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All Tasks");

  const displayedItems = taskList.filter((item) => {
    if (selectedStatus === "All Tasks") {
      return true;
    }
    return item.status === selectedStatus;
  });

  return (
    <div className="app-container">
      <StatusContext.Provider value={{ selectedStatus, setSelectedStatus }}>
        <ControlPanel
          taskList={taskList}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          addNewTask={addNewTask}
        />
      </StatusContext.Provider>
      <div className="task-app-container">
        {taskList.length > 0 ? (
          <div className="task-list-grid">
            {displayedItems.map((task, index) => (
              <TaskCard
                key={task.taskId}
                taskId={task.taskId}
                badgeText={task.badgeText}
                taskContent={task.taskContent}
                taskDate={task.taskDate}
              />
            ))}
          </div>
        ) : (
          <EmptyListMessage OnCreateTaskClick={setIsOpen} />
        )}
      </div>
    </div>
  );
};

export default AppContainer;