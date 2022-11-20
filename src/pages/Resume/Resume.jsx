import React, { useState } from "react";
import {
  PersonalDetail,
  ResumeRightContainer,
  Document,
  EntriesSection,
  DescriptionSection,
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

              <DescriptionSection headerTitle={"Tóm tắt"} />
              <EntriesSection
                headerTitle={"Học vấn"}
                btnText={"Thêm bản ghi"}
                type={"Education"}
              />
              <EntriesSection
                headerTitle={"Kinh nghiệm"}
                btnText={"Thêm bản ghi"}
                type={"Experience"}
              />
              <EntriesSection
                headerTitle={"Kỹ năng"}
                btnText={"Thêm kỹ năng"}
                type={"Skill"}
              />

              <EntriesSection
                headerTitle={"Chứng chỉ"}
                btnText={"Thêm chứng chỉ"}
                type={"Certificate"}
              />

              <EntriesSection
                headerTitle={"Sở thích"}
                btnText={"Thêm sở thích"}
                type={"Hobby"}
              />
              <DescriptionSection headerTitle={"Thành tích"} />

              <EntriesSection
                headerTitle={"Phần tùy chỉnh"}
                btnText={"Thêm bản ghi"}
              />
            </div>
          </ResumeContentRight>
        </ResumeRightContainer>
      </ResumeContent>
    </ResumeContainer>
  );
};

export default Resume;
