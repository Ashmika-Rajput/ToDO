import React from 'react';
import classes from './NavBar.module.css';

export default function NavBar(){
  return (
    <div>
      <div className={classes.navbar}>
        <ul>
            <li>To Do</li>
        </ul>
      </div> 
    </div>
  )
}
