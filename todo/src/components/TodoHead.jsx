import React from "react";
import Todos from "./Todos";
import { useState } from "react";


const TodoHead = () => {

    
    const [data,setData]=useState(JSON.parse(localStorage.getItem("data"))||[])
    console.log(data)
    // <td>{props.iD}</td>
    //     <td>{props.title}</td>
    //     <td>{props.desc}</td>
    //     <td>{props.isComplete ? "Completed" :"Not Completed"}</td>
  return (
    <div className="todoHead">
      <header>Your Todo List</header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Completed</th>
            <th>Priority</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((ele,ind)=>{
                return(
                <Todos data={data} setData={setData} id={ind} iD={ind+1} priority={ele.priority} title={ele.title} desc={ele.desc} isComplete={ele.isComplete} />
                )
            })
          }
          
        </tbody>
      </table>
    </div>
  );
};

export default TodoHead;
