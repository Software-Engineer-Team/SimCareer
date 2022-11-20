import { configureStore } from "@reduxjs/toolkit";
import judgementReducer from "./judgement-slice";
import userReducer from "./user-slice";
import fileReducer from "./file-slice";
import resumeReducer from "./resume-slice";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    user: userReducer,
    judgement: judgementReducer,
    file: fileReducer,
    resume: resumeReducer,
  },
});

export default store;
