import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodoAsync = createAsyncThunk("todos/getTodoAsync", async () => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/todos`);
  const data = await response.json();
  return data;
});

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/todos`,
      data
    );
    return res.data;
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    activeFilter: "all",
    addNewTodoIsLoading: false,
    addNewTodoError: null,
  },
  reducers: {
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => !item.completed);
      state.items = filtered;
    },
  },
  extraReducers: (builder) => {
    // get todos
    builder
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
      });

    // add todo
    builder
      .addCase(addTodoAsync.pending, (state) => {
        state.addNewTodoIsLoading = true;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.addNewTodoIsLoading = false;
      })
      .addCase(addTodoAsync.rejected, (state, action) => {
        state.addNewTodoIsLoading = false;
        state.error = action.error.message;
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

export const { toggle, destroy, changeActiveFilter, clearCompleted } =
  todosSlice.actions;
export default todosSlice.reducer;
