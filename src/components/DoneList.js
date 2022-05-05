import React from 'react';
import classes from './DoneList.module.css';
import { useContext } from 'react';
import TaskContext from '../store/task-context';


export default function DoneList(props) {
  const ctx=useContext(TaskContext);

  
const  doneItems=<ul className={classes.task}>{
        ctx.list.map((item)=>{
           return (
                    <li key={item.id}>
                        {item.newList}
                    </li>
           
           )
         })
         }</ul>
 
  return (
    <>
         {doneItems}
         <button className={classes.btn} onClick={props.onHide}>Close</button>
    </>
  )
}

