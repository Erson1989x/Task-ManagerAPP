import './Badge.css'

const Badge = (props) => {

    const getBadgeStyle = (props) => {
        switch (props.badgeText) {
            case 'Todo':
                return 'badge-todo'
            case 'In Progress':
                return 'badge-in-progress'
            case 'Pending':
                return 'badge-pending'
            case 'Completed':
                return 'badge-completed'
            default:
                return 'badge-todo'
        }
    }

    return (
    <div className='task-card-badge'>
        <p className={`task-card-badge-text ${getBadgeStyle(props)}`}>{props.badgeText}</p>
    </div>
    )
}

export default Badge;