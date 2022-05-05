import React,{useState} from 'react';
import NewTask from './NewTask';
import classes from './AddTask.module.css';


export default function AddTask() {
  
const[task,setTask]=useState('');
const[newTask,setNewTask]=useState([]);


  
const changeHandler=(event)=>{
    event.preventDefault();
    setTask(event.target.value);
}
const addHandler=()=>{
  
        setNewTask((prevTask)=>{
            return[...prevTask,{newList:task,id:Math.random().toString()}]
        })
        setTask('');
        
}



return (
  <>
      <div className={classes.main}>
         <div className={classes.add}>
            <label htmlFor="task">ToDo</label>
            <input type="text" 
                   id='task'
                   placeholder='Enter your task' 
                   onChange={changeHandler} 
                   value={task}
                   />
          </div>
          <div className={classes.btn}>
            <button onClick={addHandler} >Create Task</button>
          </div>
       </div>
        <NewTask newTask={newTask}></NewTask>
  </>
  )
}
