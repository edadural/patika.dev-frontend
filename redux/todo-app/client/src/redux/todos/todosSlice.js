import { createSlice } from "@reduxjs/toolkit";
import {
  getTodoAsync,
  addTodoAsync,
  toggleTodoAsync,
  removeTodoAsync,
} from "./services";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    activeFilter: localStorage.getItem("activeFilter"),
    addNewTodo: {
      isLoading: false,
      error: null,
    },
  },
  reducers: {
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => !item.completed);
      state.items = filtered;
    },
  },
  extraReducers: (builder) => {
    builder
      // get todos
      .addCase(getTodoAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodoAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getTodoAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // add todo
      .addCase(addTodoAsync.pending, (state) => {
        state.addNewTodo.isLoading = true;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.addNewTodo.isLoading = false;
      })
      .addCase(addTodoAsync.rejected, (state, action) => {
        state.addNewTodo.isLoading = false;
        state.addNewTodo.error = action.error.message;
      })

      // toggle todo
      .addCase(toggleTodoAsync.fulfilled, (state, action) => {
        const { id, completed } = action.payload;
        const index = state.items.findIndex((item) => item.id === id);
        state.items[index].completed = completed;
      })

      // remove todo
      .addCase(removeTodoAsync.fulfilled, (state, action) => {
        const id = action.payload;
        // const filtered = state.items.filter((item) => item.id !== id);
        // state.items = filtered;
        const index = state.items.findIndex((item) => item.id === id);
        state.items.splice(index, 1);
      });
  },
});

export const selectTodos = (state) => state.todos.items;
export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === "all") {
    return state.todos.items;
  }

  return state.todos.items.filter((item) =>
    state.todos.activeFilter === "active"
      ? item.completed === false
      : item.completed === true
  );
};

export const { changeActiveFilter, clearCompleted } = todosSlice.actions;
export default todosSlice.reducer;
