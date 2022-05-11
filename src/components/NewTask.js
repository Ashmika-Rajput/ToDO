import React from 'react';
import classes from './NewTask.module.css';


export default function NewTask(props) {
  return (
    <div>
          <h2>Pending</h2>
          <div className={classes.task} >
            <div>
              {props.newTask.map((item, index) => (
                <div key={index}  className={classes.display}>  
                    <p>{item}</p>
                  <div>
                    <button onClick={()=> props.deleteTodo(index,'pending')} >Delete</button>
                    <button onClick={()=> props.completeTodo(index,'completed')}>Complete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
            <h2>Completed</h2>
          <div className={classes.task} >
            <div >
              {props.completedTodos.map((item, index) => (
                <div key={index} className={classes.display}>
                  <p>{item}</p>
                  <div>
                    <button onClick={()=> props.deleteTodo(index)} >Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}
