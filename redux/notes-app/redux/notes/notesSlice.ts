import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: 1,
        title: "First Note",
        description: "This is the first note",
        color: "secondary",
      },
      {
        id: 2,
        title: "Second Note",
        description: "This is the second note",
        color: "warning",
      },
    ],
  },
  reducers: {
    getNotes: (state) => state,
    // add note
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.items = state.items.filter((note) => note.id !== action.payload);
    },
  },
});

export const { getNotes, addNote } = notesSlice.actions;
export default notesSlice.reducer;
