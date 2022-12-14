import React, { useState } from "react";
import {
  PersonalDetail,
  ResumeRightContainer,
  Document,
  EntriesSection,
  DescriptionSection,
  PdfDisplay,
  Portal,
} from "@components/index";
import {
  ResumeContainer,
  ResumeContent,
  ResumeContentLeft,
  ResumeContentRight,
  ResumeHeader,
} from "./Resume.styled";
import { Fade } from "react-reveal";
import { TiTick } from "react-icons/ti";

const Resume = () => {
  const [closeResumeRight, setCloseResumeRight] = useState(true);
  const toggleCloseResumeRight = () => {
    setCloseResumeRight(!closeResumeRight);
  };
  return (
    <ResumeContainer>
      <ResumeHeader>
        <div className="feedback-image">
          <img src="/images/simcareer-not-label.png" alt="" />
          <div>SIMCV</div>
        </div>
        <div className="cv-container">
          <div className="cv-name"></div>
          <div className="file-name">SIMPLE CV BUT HIGH QUALITY</div>
        </div>
      </ResumeHeader>
      <ResumeContent>
        <ResumeContentLeft>
          <div className="file-pdf">
            <Document
              closeResumeRight={closeResumeRight}
              toggleCloseResumeRight={toggleCloseResumeRight}
            />
          </div>
        </ResumeContentLeft>
        {closeResumeRight && (
          <Fade left>
            <ResumeRightContainer backgroundColor={"#ffffff"}>
              <ResumeContentRight>
                <div className="resume-content-right">
                  <PersonalDetail type="PersonalDetail" />

                  <DescriptionSection
                    headerTitle={"Tóm tắt"}
                    type={"Summary"}
                  />
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
                    headerTitle={"Thành tích"}
                    btnText={"Thêm thành tích"}
                    type={"Achievements"}
                  />
                  <EntriesSection
                    headerTitle={"Sở thích"}
                    btnText={"Thêm sở thích"}
                    type={"Hobby"}
                  />

                  <div className="btn-container">
                    <div className="btn-done" onClick={toggleCloseResumeRight}>
                      <TiTick />
                      <span>Submit</span>
                    </div>
                  </div>
                </div>
              </ResumeContentRight>
            </ResumeRightContainer>
          </Fade>
        )}
      </ResumeContent>
    </ResumeContainer>
  );
};

export default Resume;
