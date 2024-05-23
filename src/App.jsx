
import './App.css'
import TaskCard from './components/TaskCard/TaskCard.jsx'
import AppContainer from './components/AppContainer/AppContainer.jsx'

const App =() => {

  const taskData = [
    {
        taskId: 'T-1',
        badgeText: 'Todo',
        taskContent: 'Create a Design System for Enum Workspace.',
        taskDate: new Date(2022,5,23)
    },

    {
      taskId: 'T-2',
      badgeText: 'In Progress',
      taskContent: 'lorem ipsum lorem ipsum lorem ipsum',
      taskDate: new Date(2022,5,24)
    },

    {
      taskId: 'T-3',
      badgeText: 'Done',
      taskContent: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      taskDate: new Date(2022,5,25)
    }
]

  return (
    
      <AppContainer>
      {taskData.map((task) => (
        <TaskCard key = {task.taskId} taskId={task.taskId} badgeText={task.badgeText} taskContent={task.taskContent} taskDate={task.taskDate} />
      ))}
      </AppContainer >
  );
};



export default App;
