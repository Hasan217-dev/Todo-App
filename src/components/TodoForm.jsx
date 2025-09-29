import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {

    const [todo , setTodo] = useState('')
    const {addTodo} = useTodo()

    const add  = (e) => {
           e.preventDefault()
           if(!todo) return 
           addTodo({ todo , completed : false })
           setTodo('')
    }
    

    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-purple-600 text-white hover:bg-purple-700 shrink-0" >
                Add
            </button>
        </form>
    );
}

export default TodoForm;

