import "./TaskCard.css";
import Badge from "../Badge/Badge";
import DateContainer from "../DateContainer/DateContainer";

const TaskCard = ({ taskId, badgeText, taskContent, taskDate }) => {
  const getBadgeStyle = (text) => {
    switch (text) {
      case "Todo":
        console.log("color: gray");
        return "gray";
      case "In Progress":
        console.log("color: blue");
        return "blue";
      case "Pending":
        console.log("color: orange");
        return "orange";
      case "Completed":
        console.log("color: green");
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <div className="task-card-container">
      <div className="task-card-header">
        <p className="task-card-title">{taskId}</p>
        <Badge badgeText={badgeText} color={getBadgeStyle(badgeText)} />
      </div>
      <div className="task-card-content">
        <p>{taskContent}</p>
      </div>
      <div className="task-card-footer">
        <DateContainer taskDate={taskDate} />
      </div>
    </div>
  );
};

export default TaskCard;