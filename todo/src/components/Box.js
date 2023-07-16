import React from 'react'
import { useState } from 'react';




const Box = () => {
  const [myTodos,setTodo]=useState(JSON.parse(localStorage.getItem("data"))||[]);
  const [title,setTitle]=useState('');
  const [desc,setDesc]=useState('');
  const [isComplete,setComplete]=useState(false);
  const [priority,setPriority]=useState("high");
  // console.log(document.getElementsByTagName("form"))
  function changeTitle(event){
    setTitle(event.target.value)
    console.log(title)
  }
  function addTodo(event){
    // event.preventDefault();
    let obj={title,desc,isComplete,priority}
    
    myTodos.push(obj)

    localStorage.setItem("data",JSON.stringify(myTodos))
    
    
  }
  
  function changeDesc(event){
    setDesc(event.target.value)
    console.log(desc)
  }
  function changeIsComplete(event){
    setComplete(event.target.checked==true)
    console.log(isComplete)
  }
  function changePriority(event){
    
    setPriority(event.target.value)
    
    
  }
  return (
    <div>
      <h2><a href="/todo">toList</a></h2>
      <form onSubmit={addTodo}>
        <label for="title">Title:</label>
        <input type="text" value={title} onChange={changeTitle} setTitle={setTitle} id="title" name="title" required/>
  
        <label for="description">Description:</label>
        <textarea id="description" onChange={changeDesc} setTitle={setDesc} name="description" required></textarea>
  
        <label for="completed">Completed:</label>
        <input type="checkbox" onChange={changeIsComplete} setTitle={setComplete} id="completed" name="completed"/>
  
        <label for="priority">Priority:</label>
        <select id="priority" onChange={changePriority} setTitle={setPriority} name="priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
  
        <input type="submit" value="Submit"/>
      </form>



    </div>
  )
}

export default Box