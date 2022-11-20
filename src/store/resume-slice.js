import { createSlice } from "@reduxjs/toolkit";

export const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    personalDetail: {
      name: "Nguyen Thi A",
      email: "anniennguyen.work@gmail.com",
      occupation: "Thực tập sinh Marketing",
      phoneNum: "0123456789",
      address: "123 nguyễn tri phương, quận 10, tp hồ chí minh",
      image: "/images/simcareer.png",
      linkedinUrl: "https://www.linkedin.com/in/chk842",
    },
  },
  reducers: {
    setPersonalDetailName(state, action) {
      state.personalDetail.name = action.payload.name;
    },
    setPersonalDetailEmail(state, action) {
      state.personalDetail.email = action.payload.email;
    },
    setPersonalDetailOccupation(state, action) {
      state.personalDetail.occupation = action.payload.occupation;
    },
    setPersonalDetailPhoneNum(state, action) {
      state.personalDetail.phoneNum = action.payload.phoneNum;
    },
    setPersonalDetailAddress(state, action) {
      state.personalDetail.address = action.payload.address;
    },
    setPersonalDetailLinkedinUrl(state, action) {
      state.personalDetail.linkedinUrl = action.payload.linkedinUrl;
    },
    setPersonalDetailImage(state, action) {
      state.personalDetail.image = action.payload.image;
    },
    setPersonalDetail(state, action) {
      state.personalDetail = action.payload.personalDetail;
    },
    setResume(state, action) {
      state.resume = action.payload.resume;
    },
  },
});

export const resumeActions = resumeSlice.actions;

export default resumeSlice.reducer;
