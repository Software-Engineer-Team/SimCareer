import { createSlice } from "@reduxjs/toolkit";

export const judgementSlice = createSlice({
  name: "judgement",
  initialState: {
    firstAnswer: {
      answer1: "",
      answer2: "",
    },
    secondAnswer: "",
    thirdAnswer: "",
    questionNumber: -1,
  },
  reducers: {
    setFirstAnswer1(state, action) {
      state.firstAnswer.answer1 = action.payload.answer1;
    },
    setFirstAnswer2(state, action) {
      state.firstAnswer.answer2 = action.payload.answer2;
    },
    setSecondAnswer(state, action) {
      state.secondAnswer = action.payload.secondAnswer;
    },
    setThirdAnswer(state, action) {
      state.thirdAnswer = action.payload.thirdAnswer;
    },
    setQuestionNumber(state, action) {
      state.questionNumber = action.payload.questionNumber;
    },
  },
});

export const judgementActions = judgementSlice.actions;

export default judgementSlice.reducer;
