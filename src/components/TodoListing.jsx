import { useEffect } from 'react'
import useTodoStore from '../stores/useTodoStore.js'

const TodoListing = () => {
    const todos = useTodoStore((state) => state.todos)
    
    useEffect(() => {console.log("Re-rendered")})
  return (
    <div>
        {
            todos.map((todo, index) => (
                <h1 key={index}>{todo}</h1>
            ))
        }
    </div>
  )
}

export default TodoListing