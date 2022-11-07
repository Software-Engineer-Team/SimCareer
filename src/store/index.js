import { configureStore } from "@reduxjs/toolkit";
import judgementReducer from "./judgement-slice";
import userReducer from "./user-slice";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    user: userReducer,
    judgement: judgementReducer,
  },
});

export default store;
