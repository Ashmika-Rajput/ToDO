import './App.css';
import AddTask from './components/AddTask';
import NavBar from './components/NavBar';
import TaskProvider from './store/TaskProvider';

function App(props) { 
  return (
    <TaskProvider className="App">
      <NavBar newTask={props.newTask} />
      <div className='task'>
      <AddTask/>
      </div>
    </TaskProvider>

  );
}

export default App;
