import React from 'react';

const TaskContext=React.createContext({
    list:[],
    addToList:(item)=>{},
});
export default TaskContext;