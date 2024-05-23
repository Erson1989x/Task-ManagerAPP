import './AppContainer.css'

const  AppContainer = (props) => {
    return (
        <>
        <h1 className='app-title'>Task Manager</h1>
        <div className='app-container'>
            {props.children}
        </div>
        </>
    )

}

export default AppContainer;