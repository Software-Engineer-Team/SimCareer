import React, { useState } from "react";
import {
  PersonalDetail,
  ResumeRightContainer,
  Document,
  Education,
} from "@components/index";
import PDFDisplay from "@components/PDFDisplay/PDFDisplay";
import {
  FeedBackContainer,
  FeedBackContent,
  FeedBackContentLeft,
  FeedBackContentRight,
  FeedBackHeader,
  ResumeContentRight,
} from "./Resume.styled";

const Resume = () => {
  /* const [showImageForm, setShowImageForm] = useState(false); */
  /* const [image, setImage] = useState({}); */
  /* const uploadImageHandler = (imgRef) => { */
  /*   if (imgRef.current.files[0]) { */
  /*     const fReader = new FileReader(); */
  /*     const file = imgRef.current.files[0]; */
  /*     fReader.readAsDataURL(imgRef.current.files[0]); */
  /*     fReader.onload = () => { */
  /*       setImage({ */
  /*         url: fReader.result, */
  /*         name: file.name, */
  /*         size: (file.size / 1024).toFixed(2), */
  /*       }); */
  /*       closeImageFormHandler(); */
  /*     }; */
  /*   } */
  /* }; */
  /* const closeImageFormHandler = () => { */
  /*   setShowImageForm(false); */
  /* }; */
  /* const openImageFormHandler = () => { */
  /*   setShowImageForm(true); */
  /* }; */
  return (
    <FeedBackContainer>
      <FeedBackHeader>
        <div className="feedback-image">
          <img src="/images/simcareer-not-label.png" alt="" />
          <div>SIMCV FEEDBACK</div>
        </div>
        <div className="cv-container">
          <div className="cv-name"></div>
          <div className="file-name">D__H__Y__H__</div>
        </div>
      </FeedBackHeader>
      <FeedBackContent>
        <FeedBackContentLeft>
          <div className="file-pdf">
            <Document />
          </div>
        </FeedBackContentLeft>
        <ResumeRightContainer backgroundColor={"#ffffff"}>
          <ResumeContentRight>
            <div className="resume-content-right">
              <PersonalDetail />
              <Education />
            </div>
          </ResumeContentRight>
        </ResumeRightContainer>
      </FeedBackContent>
    </FeedBackContainer>
  );
};

export default Resume;
