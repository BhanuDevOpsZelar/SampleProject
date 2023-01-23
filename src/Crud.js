import { useState } from 'react';
import React from 'react'

const Crud = () => {
    
    const [todoList, setTodoList] = useState([]);
  
    const [AddTask, setAddTask] = useState("");
    
    
    const addTaskClick=()=>{
      setTodoList([...todoList, AddTask]);
      
    }
    const clearClick=(taskName)=>{
      const newTodoList = todoList.filter((task)=>{
        return task !== taskName
      })
      setTodoList(newTodoList)
    }
    
    return (
      <div className='App'>
        <h2>Todo List</h2>
        <input type="text" onChange={(event)=>{setAddTask(event.target.value)}} />
        <button onClick={addTaskClick}>Add Task</button>
        <div>{todoList.map((task, ind)=>{
          return <h2 key={ind}>{task} <button onClick={()=>clearClick(task)}>X</button></h2>
        })} </div>
      </div>
    )
  
}

export default Crud