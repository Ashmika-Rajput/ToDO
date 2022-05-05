import React,{useContext} from 'react';
import { useState } from 'react';
import classes from './NewTask.module.css';
import TaskContext from '../store/task-context';

export default function NewTask(props) {
  const ctx=useContext(TaskContext);
  const[doneList,showDoneList]=useState(true);

  const doneHandler=()=>{
    const display=props.newTask;
    // let {id,newList}=display;
    // ctx.addToList({
    //   id:id,
    //   list:newList,
    // })
    ctx.addToList(display);
     console.log(display);
     showDoneList(false);
}
  return (
    <div className={classes.task}>
          <ul>
                {props.newTask.map((item)=>(
                    <li key={item.id}   >
                        {item.newList}
                        <button onClick={doneHandler}>
                          {!doneList && 'Added To Completed'}
                          {doneList && 'Done'}
                        </button>
                    </li>
                ))}
            </ul>
    </div>
  )
}
