import React from "react";
import {
  PersonalDetail,
  ResumeRightContainer,
  Document,
  EntriesSection,
  DescriptionSection,
} from "@components/index";
import {
  ResumeContainer,
  ResumeContent,
  ResumeContentLeft,
  ResumeContentRight,
  ResumeHeader,
} from "./Resume.styled";
import { Fade } from "react-reveal";

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
          <div className="file-name">RESUME</div>
        </div>
      </ResumeHeader>
      <ResumeContent>
        <ResumeContentLeft>
          <div className="file-pdf">
            <Document />
          </div>
        </ResumeContentLeft>
        <Fade left>
          <ResumeRightContainer backgroundColor={"#ffffff"}>
            <ResumeContentRight>
              <div className="resume-content-right">
                <PersonalDetail />

                <DescriptionSection headerTitle={"Tóm tắt"} type={"Summary"} />
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
                <EntriesSection
                  headerTitle={"Thành tích"}
                  btnText={"Thêm thành tích"}
                  type={"Achievements"}
                />
                {/* <DescriptionSection */}
                {/*   headerTitle={"Thành tích"} */}
                {/*   type={"Achievements"} */}
                {/* /> */}
              </div>
            </ResumeContentRight>
          </ResumeRightContainer>
        </Fade>
      </ResumeContent>
    </ResumeContainer>
  );
};

export default Resume;
