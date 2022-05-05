import React,{useReducer} from 'react';
import TaskContext from './task-context';

const defaultList={
  list:[]
}

const listReducer=(state,action)=>{
   if(action.type==='ADD'){
     const updatedList=state.list.concat(action.list);
     return {
       list:updatedList
     }
   }
   return defaultList;
}

export default function TaskProvider(props) {
  const[listState,dispatchAction] =useReducer(listReducer,defaultList);
   const addHandler=(list)=>{
     dispatchAction({type:"ADD",list:list})
   }

    const taskContext={
      list:listState.list,
      addToList:addHandler,
    }
    return (
           <TaskContext.Provider value={taskContext} >
                {props.children}
           </TaskContext.Provider>
    )
}
