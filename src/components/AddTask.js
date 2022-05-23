import React,{useState} from 'react';
import TodoList from './TodoList';
import classes from './AddTask.module.css';


export default function AddTask() {
    const [todo, setTodo] = useState("");
    const [pendingTodos, setPendingTodos] = useState(['Pay Electricity Bill']);
    const [completedTodos, setCompletedTodos] = useState(['Rent a flat.']);
     
   const changeHandler=(event)=>{
      setTodo(event.target.value);
   }

async function completeHandler(todoIndex) {
      const pendingTask = pendingTodos[todoIndex];
      setCompletedTodos([...completedTodos, pendingTask]);
      deleteHandler(todoIndex, "pending");
    }
  

 async function deleteHandler(todoIndex, targetSection) {
      const targetList =targetSection === "pending" ? pendingTodos : completedTodos;
      const setter = targetSection === "pending" ? setPendingTodos : setCompletedTodos;
      const filteredTodos =  targetList.filter((_, index) => todoIndex !== index);
      setter(filteredTodos);
    }
  
     const createTaskHandler=()=>{
        setPendingTodos([...pendingTodos,todo])
        setTodo('');
}
    return (
    <div>
      <div className={classes.main}>
        <div className={classes.add}>
           <h1>ToDo</h1>
           <input type="text"
                   placeholder="Add todo..."
                   value={todo}
                   onChange={changeHandler}
            />
        </div> 
        <div className={classes.btn}>
        <button onClick={createTaskHandler} >Create Task</button>
        </div> 
        <TodoList pendingTodos={pendingTodos} 
                 completedTodos={completedTodos}
                 completeHandler={completeHandler} 
                 deleteHandler={deleteHandler} 
                 
                 />
      </div>
      </div>
    );
  }

