import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos]=useState([
    'Go to the gym',
    'Eat more fruits and veg',
    'Do some cardio and stay healthy.'
  ])

  function handleAddTodos(newTodo){
    const newTodoList = [...todos,newTodo]
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} />
    </>
  )
}

export default App
