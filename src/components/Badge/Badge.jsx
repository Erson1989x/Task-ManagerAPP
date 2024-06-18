import "./Badge.css";

const BadgeColors = ['gray', 'blue', 'orange', 'green'];

const Badge = ({ badgeText, color }) => {
  return (
    <div className="task-card-badge">
      <p className={`task-card-badge-text ${color}`}>
        {badgeText}
      </p>
    </div>
  );
};

export default Badge;