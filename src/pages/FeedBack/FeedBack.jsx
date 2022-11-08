import React from "react";
import {
  FeedBackContainer,
  FeedBackContent,
  FeedBackContentLeft,
  FeedBackContentRight,
  FeedBackHeader,
} from "./FeedBack.styled";

const FeedBack = () => {
  return (
    <FeedBackContainer>
      <FeedBackHeader>
        <div className="feedback-image">
          <img src="/images/simcareer-not-label.png" alt="" />
          <div>SIMCV FEEDBACK</div>
        </div>
        <div className="cv-container">
          <div className="cv-name">Yến Hoa</div>
          <div className="file-name">Đặng Hoàng Yến Hoa CV_2022</div>
        </div>
      </FeedBackHeader>
      <FeedBackContent>
        <FeedBackContentLeft>
          <div className="file-pdf">
            <img src="/images/feedback-example.jpg" alt="" />
          </div>
        </FeedBackContentLeft>
        <FeedBackContentRight></FeedBackContentRight>
      </FeedBackContent>
    </FeedBackContainer>
  );
};

export default FeedBack;
