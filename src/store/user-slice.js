import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  access_token: "",
  refresh_token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.email = action.payload.email;
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      state.name = action.payload.name;
    },
    logout(state) {
      state = initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
