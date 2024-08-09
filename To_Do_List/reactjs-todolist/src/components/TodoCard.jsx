import React from 'react'

export default function TodoCard(props) {
  const {children, handleDeleteTodo, index, handleEditTodo}=props
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button>
          <i className="fa-solid fa-pen-to-square" onClick={()=>{
            handleEditTodo(index)
          }}></i>
        </button>
        <button onClick={()=> {
          handleDeleteTodo(index)
        }}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  )
}
