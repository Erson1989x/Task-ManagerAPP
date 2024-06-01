import './Badge.css'

const Badge = (props) => {
    return (
    <div className='task-card-badge'>
        <p className='task-card-badge-text'>{props.badgeText}</p>
    </div>
    )
}

export default Badge;