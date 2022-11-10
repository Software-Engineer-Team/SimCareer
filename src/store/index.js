import { configureStore } from "@reduxjs/toolkit";
import judgementReducer from "./judgement-slice";
import userReducer from "./user-slice";
import fileReducer from "./file-slice";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    user: userReducer,
    judgement: judgementReducer,
    file: fileReducer,
  },
});

export default store;
