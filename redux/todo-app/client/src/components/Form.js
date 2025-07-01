import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";
import { useState } from "react";

function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    if (!title) return;
    e.preventDefault();

    dispatch(addTodo({ title }));
    setTitle("");
  };

  return (
    <form onClick={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}

export default Form;
