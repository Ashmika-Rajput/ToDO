import React from 'react';
import { useState } from 'react';
import classes from './NavBar.module.css';
//import TaskContext from '../store/task-context';
import DoneList from './DoneList';
//let list=localStorage.getItem('list');


export default function NavBar(props) {
  const[doneList,showDoneList]=useState(false);
  //const ctx=useContext(TaskContext);
  
  const completeHandler=()=>{
    //const finalList=ctx.list;
    showDoneList(true);
   //console.log(finalList);

  }
   const hideHandler=()=>{
     showDoneList(false);
  }

  return (
    <div>
      <div className={classes.navbar}>
        <ul>
            <li>To Do</li>
            <li><button onClick={completeHandler} > Completed</button></li>
        </ul>
      </div>
        {doneList && <DoneList onHide={hideHandler} />}
    </div>
  )
}
