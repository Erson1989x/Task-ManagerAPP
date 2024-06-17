import React from "react";
import { useState } from "react";
import ControlPanel from "../ControlPanel/ControlPanel";
import TaskCard from "../TaskCard/TaskCard";
import EmptyListMessage from "../EmptyListMessage/EmptyListMessage";
import "./AppContainer.css";

const AppContainer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-container">
      {/*app-container-control-panal*/}
      <ControlPanel
        taskList={props.taskList}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addNewTask={props.addNewTask}
      />
      <div className="task-app-container">
        {props.taskList.length > 0 ? (
          <div className="task-list-grid">
            {props.taskList.map((task, index) => {
              return (
                <TaskCard
                  key={task.taskId}
                  taskId={task.taskId}
                  badgeText={task.badgeText}
                  taskContent={task.taskContent}
                  taskDate={task.taskDate}
                />
              );
            })}
          </div>
        ) : (
          <EmptyListMessage OnCreateTaskClick={setIsOpen} />
        )}
      </div>
    </div>
  );
};

export default AppContainer;
