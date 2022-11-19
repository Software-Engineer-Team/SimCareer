import React from "react";
import styled from "styled-components";

const Achivements = () => {
  return (
    <AchivementContainer>
      <div className="achivement">
        <div className="title">
          <span>Thành tích</span>
        </div>
        <p>
          Tóm tắt bản thân: Để giúp nhà tuyển dụng có những cái nhìn khái quát
          về bạn. Một đoạn giới thiệu vắn tắt Bạn là ai ? Điểm mạnh ? Mục tiêu
          sự nghiệp ? là rất cần thiết.
        </p>
        <p>
          Công việc của một digital marketer cần đáp ứng những kỹ năng liên quan
          đến mặt kĩ thuật nhằm gia tăng khả năng chinh phục nhà tuyển dụng;
        </p>
      </div>
    </AchivementContainer>
  );
};

export default Achivements;

const AchivementContainer = styled.div`
  width: 100%;
  color: #ffffff;
  margin-top: 20px;

  .achivement {
    width: 100%;
    .title {
      background: #453a98;
      font-size: 40px;
      text-transform: uppercase;
      font-weight: 500;

      span {
        margin-left: 0px;
      }
    }

    p {
      min-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
      margin: 0px;
      font-size: 22px;
      font-family: Cambria, Georgia, serif;
      font-weight: 400;
    }
  }
`;
