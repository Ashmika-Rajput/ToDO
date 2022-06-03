import React from 'react';
import classes from './TodoList.module.css';


export default function NewTask(props) {
  return (
    <div>
          <h2>Pending</h2>
          <div className={classes.task} >
            <div>
              {props.pendingTodos.map((todo, index) => (
                <div key={index}  className={classes.display} data-testid="task">  
                    <p>{todo}</p>
                  <div>
                    <button onClick={ ()=>props.deleteHandler(index,'pending')} >Delete</button>
                    <button onClick={()=>props.completeHandler(index,'completed')}>Complete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
            <h2>Completed</h2>
          <div className={classes.task} >
            <div >
              {props.completedTodos.map((todo, index) => (
                <div key={index} className={classes.display} data-testid="task" >
                  <p>{todo}</p>
                  <div>
                    <button onClick={()=>props.deleteHandler(index)} >Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}
