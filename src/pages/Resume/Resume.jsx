import React from "react";
import { ResumeRightContainer } from "@components/index";
import PDFDisplay from "~/components/PDFDisplay/PDFDisplay";
import {
  FeedBackContainer,
  FeedBackContent,
  FeedBackContentLeft,
  FeedBackContentRight,
  FeedBackHeader,
} from "./Resume.styled";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Bounce, Fade, Flip, Zoom } from "react-reveal";

const Resume = () => {
  const feedbackContents = [
    {
      backgroundColor: "#f3f3a9",
      textAlign: "center",
      marginTop: "20px",
      marginBottom: "40px",
      feedbacks: [
        {
          content:
            "Thông tin cá nhân: Ứng viên cần cập nhật DOB trong hồ sơ ứng tuyển của mình",
          type: "align-text-left",
        },
        {
          content:
            "***Thông tin này phục vụ nhà tuyển dụng trong việc đánh giá tiềm năng phát triển của bạn***",
          type: "align-text-left",
        },
        {
          content:
            "Tóm tắt bản thân: Để giúp nhà tuyển dụng có những cái nhìn khái quát về bạn. Một đoạn giới thiệu vắn tắt Bạn là ai ? Điểm mạnh ? Mục tiêu sự nghiệp ? là rất cần thiết.",
          type: "italic-text",
        },
        {
          content:
            "Ngoài ra mỗi bản mỗi CV cần được cá nhân hóa cho từng công ty khác nhau để thể hiện sự tôn trọng cũng như sự quan tâm về công ty.",
          type: "italic-text",
        },
      ],
    },
    {
      backgroundColor: "#f4dbe1",
      textAlign: "left",
      marginTop: "50px",
      marginBottom: "50px",
      feedbacks: [
        {
          content:
            "Education: Ứng viên cần nêu rõ chuyên ngành hiện tại cũng như niên khóa của ngành học.",
          type: "align-text-left",
        },
      ],
    },
    {
      backgroundColor: "#def6e6",
      textAlign: "left",
      marginTop: "20px",
      marginBottom: "40px",
      feedbacks: [
        {
          content:
            "Skills: Công việc của một digital marketer cần đáp ứng những kỹ năng liên quan đến mặt kĩ thuật nhằm gia tăng khả năng chinh phục nhà tuyển dụng;",
          type: "align-text-left",
        },
        {
          content:
            "Các kỹ năng bạn đạt được cần được minh chứng thông qua các chứng chỉ nhằm gia tăng mức độ tin cậy.",
          type: "align-text-left",
        },
      ],
    },
    {
      backgroundColor: "#f6d7c3",
      textAlign: "left",
      marginTop: "20px",
      marginBottom: "40px",
      feedbacks: [
        {
          content:
            "Experience: Ứng viên nên sắp xếp thứ tự ưu tiên các công việc gần nhất mà ứng viên đã hoàn thành.",
          type: "align-text-left",
        },
      ],
    },
  ];
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
          <Fade left>
            <div className="file-pdf">
              <PDFDisplay />
            </div>
          </Fade>
        </FeedBackContentLeft>
        <FeedBackContentRight>
          <div className="feedback-content-right">
            <Flip top>
              <div className="feedback-image">
                <img src="/images/simcareer-not-label.png" alt="Test" />
                <div className="title">SIMCV FEEDBACK</div>
              </div>
            </Flip>
            {feedbackContents.map(
              (
                {
                  backgroundColor,
                  textAlign,
                  marginTop,
                  marginBottom,
                  feedbacks,
                },
                i
              ) => {
                return (
                  <Fade right>
                    <ResumeRightContainer
                      backgroundColor={backgroundColor}
                      textAlign={textAlign}
                      marginTop={marginTop}
                      marginBottom={marginBottom}
                      key={i}
                    >
                      {feedbacks.map(({ content, type }, idx) => {
                        return (
                          <Fade right>
                            <p className={type} key={idx}>
                              {content}
                            </p>
                          </Fade>
                        );
                      })}
                    </ResumeRightContainer>
                  </Fade>
                );
              }
            )}

            <Bounce left cascade>
              <div className="feedback-right-footer">
                <div className="oppotunity">
                  Tham gia cùng SIMCareer tăng cơ hội ứng tuyển
                </div>
                <Link to={"/skill-trees"} className="move-next">
                  <HiArrowLongRight />
                </Link>
              </div>
            </Bounce>
          </div>
        </FeedBackContentRight>
      </FeedBackContent>
    </FeedBackContainer>
  );
};

export default Resume;
