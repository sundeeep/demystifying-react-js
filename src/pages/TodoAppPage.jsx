import TodoEditor from "../components/TodoEditor"
import TodoListing from "../components/TodoListing"

const TodoAppPage = () => {
  return (
    <div className="flex p-6 gap-3 flex-col items-center justify-center">
    <TodoEditor />
    <TodoListing />
    </div>
  )
}

export default TodoAppPage