import React from "react";
import { FeedbackRightContainer } from "@components/index";
import PDFDisplay from "~/components/PDFDisplay/PDFDisplay";
import {
  FeedBackContainer,
  FeedBackContent,
  FeedBackContentLeft,
  FeedBackContentRight,
  FeedBackHeader,
} from "./FeedBack.styled";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

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
            <PDFDisplay />
          </div>
        </FeedBackContentLeft>
        <FeedBackContentRight>
          <div className="feedback-content-right">
            <div className="feedback-image">
              <img src="/images/simcareer-not-label.png" alt="Test" />
              <div className="title">SIMCV FEEDBACK</div>
            </div>

            <FeedbackRightContainer
              backgroundColor={"#f3f3a9"}
              textAlign="center"
              marginTop="20px"
              marginBottom="40px"
            >
              <p className="italic-text">
                We think that creating beautiful reactive documents and
                explorable explanations should be easy. Writing technical
                documents is hard enough already, and choosing to make that
                writing interactive is beyond the reach or time-commitment of
                most communicators.
              </p>
              <p className="align-text-left">
                We think that creating beautiful reactive documents and
                explorable explanations should be easy. Writing technical
                documents is hard enough already, and choosing to make that
                writing interactive is beyond the reach or time-commitment of
                most communicators.
              </p>
            </FeedbackRightContainer>

            <FeedbackRightContainer
              backgroundColor={"#f9dac6"}
              textAlign="center"
              marginTop="20px"
              marginBottom="30px"
            >
              <p className="italic-text">
                We think that creating beautiful reactive documents and
                explorable explanations should be easy. Writing technical
                documents is hard enough already, and choosing to make that
                writing interactive is beyond the reach or time-commitment of
                most communicators.
              </p>
              <p className="align-text-left">
                We think that creating beautiful reactive documents and
                explorable explanations should be easy. Writing technical
                documents is hard enough already, and choosing to make that
                writing interactive is beyond the reach or time-commitment of
                most communicators.
              </p>
            </FeedbackRightContainer>

            <div className="feedback-right-footer">
              <div className="oppotunity">
                Tham gia cùng simcareer tăng cơ hội ứng tuyển
              </div>
              <Link to={"/price-list"} className="move-next">
                <HiArrowLongRight />
              </Link>
            </div>
          </div>
        </FeedBackContentRight>
      </FeedBackContent>
    </FeedBackContainer>
  );
};

export default FeedBack;
