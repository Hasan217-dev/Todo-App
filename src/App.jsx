
import { useEffect, useState } from 'react'
import {TodoProvider} from './contexts/TodoContext'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/Todoitem'

function App() {

  const [todos , setTodos] = useState([])

  const addTodo = (todo) => {
      setTodos((prev)=> [...prev , {id : Date.now() , ...todo}] )
  }

  const updateTodo = (todo , id) => {
      setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? todo : prevTodo ))
  }

  const deleteTodo = (id) =>{
      setTodos((prev) => prev.filter((prevTodo)=> prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ?  {...prevTodo , completed : !prevTodo.completed} : prevTodo  ))
  }


  return (
    <TodoProvider value={{ todos , addTodo , deleteTodo , updateTodo , toggleComplete}}>
      <div className="rounded-r-lg px-3 py-1 bg-gradient-to-r from-sky-500 to-teal-500 text-white hover:from-sky-600 hover:to-teal-600 shrink-0 min-h-screen  ">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=> (
                          <div key={todo.id}
                          className='w-full'
                          >
                             
                        <TodoItem  todo={todo} />

                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App;