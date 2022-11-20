import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useImportWidget from "~/hooks/useImportWidget";

const Achivements = () => {
  const {
    achievement: { descriptionHtml },
  } = useSelector((state) => state.resume);
  useImportWidget({ html: descriptionHtml, elId: "ACHIEVEMENTS" });

  return (
    <AchivementContainer>
      <div className="achivement" id="ACHIEVEMENTS">
        <div className="title">
          <span>Thành tích</span>
        </div>
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

    ul,
    ol {
      margin: 0;
      font-family: Cambria, Georgia, serif;
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
