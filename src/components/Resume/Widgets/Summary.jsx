import React from "react";
import styled from "styled-components";

const Summary = () => {
  return (
    <SummaryContainer>
      <div className="title">
        <span>Tóm tắt</span>
      </div>
      <p>
        mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
        mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
      </p>
    </SummaryContainer>
  );
};

export default Summary;

const SummaryContainer = styled.div`
  width: 100%;

  .title {
    background: #453a98;
    color: #ffffff;
    padding: 2px 10px 2px 5px;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 500;

    span {
      margin-left: 20px;
    }
  }

  p {
    min-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
`;
