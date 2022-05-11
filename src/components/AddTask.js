import React,{useState,useContext} from 'react';
import NewTask from './NewTask';
import classes from './AddTask.module.css';


export default function AddTask() {
    const [task, setTask] = useState("");
    const [newTask, setNewTask] = useState(['Pay Electricity Bill']);
    const [completedTodos, setCompletedTodos] = useState(['Rent a flat.']);
     
   const changeHandler=(event)=>{
      setTask(event.target.value);
   }

    function completeTodo(todoIndex) {
      const pendingTask = newTask[todoIndex];
      setCompletedTodos([...completedTodos, pendingTask]);
      deleteTodo(todoIndex, "pending");
    }
  

    function deleteTodo(todoIndex, targetSection) {
      const targetList =targetSection === "pending" ? newTask : completedTodos;
      const setter = targetSection === "pending" ? setNewTask : setCompletedTodos;
      const filteredTodos = targetList.filter((_, index) => todoIndex !== index);
      setter(filteredTodos);
    }
  
    const addHandler=()=>{
        setNewTask([...newTask,task])
        setTask('');
        console.log(newTask);
        
}
    return (
    <div>
      <div className={classes.main}>
        <div className={classes.add}>
           <h1>ToDo</h1>
           <input type="text"
                   placeholder="Add todo..."
                   value={task}
                   onChange={changeHandler}
            />
        </div> 
        <div className={classes.btn}>
        <button onClick={addHandler} >Create Task</button>
        </div> 
        <NewTask newTask={newTask} 
                 completeTodo={completeTodo} 
                 deleteTodo={deleteTodo} 
                 completedTodos={completedTodos}
                 
                 />
      </div>
      </div>
    );
  }

