import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/todos/todosSlice";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => dispatch(toggle({ id: item.id }))}
            />
            <label>{item.title}</label>
            <button className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
