import { useState } from 'react';
import useTodoStore from '../stores/useTodoStore';

const TodoEditor = () => {
    const [todoText, setTodoText] = useState("");
    const createTodo = useTodoStore((state) => (state.createTodo))

    const handleTodoSubmission = (event) => {
        try {
            event.preventDefault();
            createTodo(todoText)
        } catch (error) {
            console.error(error)
        }finally{
            setTodoText("")
        }
    }
  return (
    <form className='flex' onSubmit={handleTodoSubmission}>
        <input className='border border-red-400 bg-red-50 text-black p-3' value={todoText} onChange={(event) => setTodoText(event.target.value)} type="text"  />
        <button className='bg-red-600 text-white rounded-md p-3' type="submit">Add todo</button>
    </form> 
  )
}

export default TodoEditor