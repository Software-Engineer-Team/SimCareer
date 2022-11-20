import React, { useState } from "react";
import {
  PersonalDetail,
  ResumeRightContainer,
  Document,
  Education,
  EntriesSection,
} from "@components/index";
import PDFDisplay from "@components/PDFDisplay/PDFDisplay";
import {
  ResumeContainer,
  ResumeContent,
  ResumeContentLeft,
  ResumeContentRight,
  ResumeHeader,
} from "./Resume.styled";

const Resume = () => {
  return (
    <ResumeContainer>
      <ResumeHeader>
        <div className="feedback-image">
          <img src="/images/simcareer-not-label.png" alt="" />
          <div>SIMCV RESUME</div>
        </div>
        <div className="cv-container">
          <div className="cv-name"></div>
          <div className="file-name">D__H__Y__H__</div>
        </div>
      </ResumeHeader>
      <ResumeContent>
        <ResumeContentLeft>
          <div className="file-pdf">
            <Document />
          </div>
        </ResumeContentLeft>
        <ResumeRightContainer backgroundColor={"#ffffff"}>
          <ResumeContentRight>
            <div className="resume-content-right">
              <PersonalDetail />
              <Education />
              <EntriesSection />
            </div>
          </ResumeContentRight>
        </ResumeRightContainer>
      </ResumeContent>
    </ResumeContainer>
  );
};

export default Resume;
