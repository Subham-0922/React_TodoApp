import React from 'react'
{/* <td>{props.iD}</td>
        <td>{props.title}</td>
        <td>{props.desc}</td>
        <td>{props.isComplete ? "Completed" :"Not Completed"}</td>
        <td>{props.priority}</td> */}

const Todos = (props) => {
  
  function deleteTodo(){
    let arr=props.data
    arr.splice(props.id,1)
    
    props.setData([...arr])
    localStorage.setItem("data",JSON.stringify(arr))
  }
  return (
    <>
      <tr>
        <td>{props.iD}</td>
        <td>{props.title}</td>
        <td>{props.desc}</td>
        <td>{props.isComplete ? "Completed" :"Not Completed"}</td>
        <td>{props.priority}</td>
        <td><span><button onClick={deleteTodo}>Delete</button></span> <span><button>Update</button></span></td>
      </tr>
    </>
  )
}

export default Todos