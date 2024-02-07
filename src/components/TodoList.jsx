import { useSelector } from "react-redux"
import TodoItem from "./Todoitem";

const TodoList = () => {
    const filteredTodos = useSelector((state) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;

        return todos.filter((todo) => {
            const matchsFilter = (filter === "COMPLETED" && todos.completed) || (filter === "INCOMPLETE" && !todo.completed) || (filter === "ALL")

            const matchSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchsFilter && matchSearch
        })
    })

    console.log('Filtered Todos: ', filteredTodos)
  return (
    <ul>
        <li className="my-2 text-sm italic">Your Todo List Is Here</li>
        {
            filteredTodos.map((todo,index) => (
                <TodoItem key={index} todo={todo} index={index} />
            ))
        }
    </ul>
  )
}

export default TodoList