import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos.items);
  console.log(todos);

  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>{item.title}</label>
            <button className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
