import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    user: userReducer,
  },
});

export default store;
