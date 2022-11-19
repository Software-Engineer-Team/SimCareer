import React from "react";
import styled from "styled-components";

const Hobby = () => {
  return (
    <HobbyContainer>
      <div className="hobby">
        <div className="title">
          <span>Sở thích cá nhân</span>
        </div>

        <div className="hobby-content">
          <h4>Ngoại ngữ</h4>
        </div>

        <div className="hobby-content">
          <h4>Tin học</h4>
        </div>
      </div>
    </HobbyContainer>
  );
};

export default Hobby;

const HobbyContainer = styled.div`
  width: 100%;
  color: #ffffff;
  margin-top: 20px;

  .hobby {
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

    h4 {
      min-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
      margin: 0px;
      font-size: 22px;
      font-family: Cambria, Georgia, serif;
      font-weight: 600;
    }

    p {
      margin: 0;
    }

    .hobby-content {
      margin-left: 6px;
      h4 {
        font-weight: 400;
      }
    }
  }
`;
