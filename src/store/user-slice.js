import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isFetch: false,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.isFetch = action.payload.isFetch;
    },
    logout(state) {
      state.user = null;
      state.isFetch = false;
    },
    setIsFetch(state, action) {
      state.isFetch = action.payload.isFetch;
    },
    setUser(state, action) {
      state.user = action.payload.user;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
