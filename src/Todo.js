// import { IconButton } from '@mui/material';
// import AddCircleIcon from '@mui/icons-material/AddCircle';

import { Button } from '@mui/material'
import React, { useState } from 'react'

function Todo() {

    const[task,setTask]=useState("")
    const[tasklist,setTasklist]=useState([])


    const handleChange =(e)=>{
        setTask(e.target.value)
    }

    const handleClick =()=>{
        if (task !== "") {
            const Details ={
                id:Math.floor(Math.random()*2000),
                value:task,
                isCompleted:false
            }
            setTasklist([...tasklist,Details])
        }
    }
// console.log("tasklist",tasklist)

const handleDelete =(e,id)=>{
    e.preventDefault()
    setTasklist(tasklist.filter((t)=>t.id != id))
}

const handleComplete =(e,id)=>{
    e.preventDefault()
    // find index element
    const element = tasklist.findIndex(element =>element.id == id)
    // copy array into new variable
    const newTaskList=[...tasklist]
    // edit element
    newTaskList[element]={
        ...newTaskList[element],
        isCompleted:true,
    }
    setTasklist(newTaskList)
}
console.log(tasklist)
  return (
    <div className='todo'>
        <input type="text" id="text" onChange={(e)=>handleChange(e)} placeholder="Add Your Task..." />
        
        <Button  className='add-btn' onClick={handleClick}>Add</Button> 
    <br/>
    {tasklist !== [] ? (
        <div>
        {tasklist.map((t)=>{
            return(
                <div>
                    <h1>{t.value}</h1>
            <button onClick={(e)=>{handleDelete(e,t.id)}}>Delete</button>
            <button onClick={(e)=>{handleComplete(e,t.id)}}>Completed</button>
            </div>)
            
        })}
    </div>
    ) : null }
    </div>
  )
}

export default Todo