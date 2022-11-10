import { createSlice } from "@reduxjs/toolkit";

export const fileSlice = createSlice({
  name: "file",
  initialState: {
    files: [],
  },
  reducers: {
    setFiles(state, action) {
      state.files = action.payload.files;
    },
    setStatus(state, action) {
      for (let index = 0; index < state.files.length; index++) {
        state.files[index].status = "Đã xem xét";
      }
    },
  },
});

export const fileActions = fileSlice.actions;

export default fileSlice.reducer;
