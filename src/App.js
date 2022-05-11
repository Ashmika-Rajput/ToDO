import React from "react";
import AddTask from "./components/AddTask";
import NavBar from "./components/NavBar";
import TaskProvider from './store/TaskProvider';
import "./App.css";


function App() {
  return(
    <TaskProvider>
      <NavBar/>
      <AddTask/>
    </TaskProvider>
  )
}
export default App;