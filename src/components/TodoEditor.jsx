import { useState } from 'react';
import useTodoStore from '../stores/useTodoStore';

const TodoEditor = () => {
    const [todoText, setTodoText] = useState("");
    const createTodo = useTodoStore((state) => (state.createTodo))

    const handleTodoTextChange = (event) => {
        setTodoText(event.target.value);
    }

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
    <form onSubmit={handleTodoSubmission}>
        <input value={todoText} onChange={handleTodoTextChange} type="text"  /> // controlled input
        <button type="submit">Add todo</button>
    </form>
  )
}

export default TodoEditor