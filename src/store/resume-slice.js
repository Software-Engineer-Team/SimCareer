import { createEditorStateWithText } from "@draft-js-plugins/editor";
import { createSlice } from "@reduxjs/toolkit";

const personalDetailInit = {
  name: "",
  email: "",
  occupation: "",
  phoneNum: "",
  address: "",
  image: "/images/simcareer.png",
  linkedinUrl: "",
};
const summaryInit = {
  descriptionHtml: null,
  editorState: createEditorStateWithText(""),
};
const educationInit = [
  {
    school: "",
    city: "",
    startDate: {
      month: "1",
      year: 2020,
    },
    endDate: {
      month: "5",
      year: 2024,
    },
    specialize: "",
    descriptionHtml: null,
    editorState: createEditorStateWithText(""),
  },
];
const experienceInit = [
  {
    company: "",
    position: "",
    city: "",
    startDate: {
      month: "1",
      year: 2024,
    },
    endDate: {
      month: "10",
      year: 2024,
    },
    descriptionHtml: null,
    editorState: createEditorStateWithText(""),
  },
];
const skillInit = [
  {
    name: "",
    descriptionHtml: null,
    editorState: createEditorStateWithText(""),
  },
];
const certificateInit = [
  {
    name: "",
    date: {
      month: "1",
      year: 2024,
    },
    descriptionHtml: null,
    editorState: createEditorStateWithText(""),
  },
];
const hobbyInit = [
  {
    name: "",
    descriptionHtml: null,
    editorState: createEditorStateWithText(""),
  },
];
const achievementInit = {
  descriptionHtml: null,
  editorState: createEditorStateWithText(""),
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    personalDetail: personalDetailInit,
    summary: summaryInit,
    education: educationInit,
    experience: experienceInit,
    skill: skillInit,
    certificate: certificateInit,
    hobby: hobbyInit,
    achievement: achievementInit,
  },
  reducers: {
    ////////////////////////// Achievement /////////////////////////
    setAchievement(state, action) {
      state.achievement = action.payload.achievement;
    },
    ////////////////////////// Summary /////////////////////////
    setSummary(state, action) {
      state.summary = action.payload.summary;
    },
    ////////////////////////// PersonalDetail /////////////////////////
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
    ////////////////////////// Experience /////////////////////////
    setExperienceCompany(state, action) {
      state.experience[action.payload.index].company = action.payload.company;
    },
    setExperiencePosition(state, action) {
      state.experience[action.payload.index].position = action.payload.position;
    },
    setExperienceCity(state, action) {
      state.experience[action.payload.index].city = action.payload.city;
    },
    setExperienceStartDate(state, action) {
      state.experience[action.payload.index].startDate = {
        ...state.experience[action.payload.index].startDate,
        ...action.payload.startDate,
      };
    },
    setExperienceEndDate(state, action) {
      state.experience[action.payload.index].endDate = {
        ...state.experience[action.payload.index].endDate,
        ...action.payload.endDate,
      };
    },
    setExperienceDescriptionHtml(state, action) {
      state.experience[action.payload.index].descriptionHtml =
        action.payload.descriptionHtml;
    },
    setExperienceEditorState(state, action) {
      state.experience[action.payload.index].editorState =
        action.payload.editorState;
    },
    addExperienceEntry(state, action) {
      state.experience.push(experienceInit[0]);
    },
    ////////////////////////// Education /////////////////////////
    setEducationSchool(state, action) {
      state.education[action.payload.index].school = action.payload.school;
    },
    setEducationCity(state, action) {
      state.education[action.payload.index].city = action.payload.city;
    },
    setEducationStartDate(state, action) {
      state.education[action.payload.index].startDate = {
        ...state.education[action.payload.index].startDate,
        ...action.payload.startDate,
      };
    },
    setEducationEndDate(state, action) {
      state.education[action.payload.index].endDate = {
        ...state.education[action.payload.index].endDate,
        ...action.payload.endDate,
      };
    },
    setEducationSpecialize(state, action) {
      state.education[action.payload.index].specialize =
        action.payload.specialize;
    },
    setEducationDescriptionHtml(state, action) {
      state.education[action.payload.index].descriptionHtml =
        action.payload.descriptionHtml;
    },
    setEducationEditorState(state, action) {
      state.education[action.payload.index].editorState =
        action.payload.editorState;
    },
    addEducationEntry(state, action) {
      state.education.push(educationInit[0]);
    },
    ////////////////////////// Skill /////////////////////////
    setSkillName(state, action) {
      state.skill[action.payload.index].name = action.payload.name;
    },
    setSkillDescriptionHtml(state, action) {
      state.skill[action.payload.index].descriptionHtml =
        action.payload.descriptionHtml;
    },
    setSkillEditorState(state, action) {
      state.skill[action.payload.index].editorState =
        action.payload.editorState;
    },
    addSkillEntry(state, action) {
      state.skill.push(skillInit[0]);
    },
    ////////////////////////// Certificate /////////////////////////
    setCertificateName(state, action) {
      state.certificate[action.payload.index].name = action.payload.name;
    },
    setCertificateDate(state, action) {
      state.certificate[action.payload.index].date = {
        ...state.certificate[action.payload.index].date,
        ...action.payload.date,
      };
    },
    setCertificateDescriptionHtml(state, action) {
      state.certificate[action.payload.index].descriptionHtml =
        action.payload.descriptionHtml;
    },
    setCertificateEditorState(state, action) {
      state.certificate[action.payload.index].editorState =
        action.payload.editorState;
    },
    addCertificateEntry(state, action) {
      state.certificate.push(certificateInit[0]);
    },
    ////////////////////////// Hobby /////////////////////////
    setHobbyName(state, action) {
      state.hobby[action.payload.index].name = action.payload.name;
    },
    setHobbyDescriptionHtml(state, action) {
      state.hobby[action.payload.index].descriptionHtml =
        action.payload.descriptionHtml;
    },
    setHobbyEditorState(state, action) {
      state.hobby[action.payload.index].editorState =
        action.payload.editorState;
    },
    addHobbyEntry(state, action) {
      state.hobby.push(hobbyInit[0]);
    },
  },
});

export const resumeActions = resumeSlice.actions;

export default resumeSlice.reducer;
