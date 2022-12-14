import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useImportWidget from "~/hooks/useImportWidget";

const Summary = () => {
  const {
    summary: { descriptionHtml },
  } = useSelector((state) => state.resume);
  useImportWidget({ html: descriptionHtml, elId: "SUMMARY" });

  return (
    <>
      {descriptionHtml && (
        <SummaryContainer id="SUMMARY">
          <div className="title">
            <span>Tóm tắt</span>
          </div>
        </SummaryContainer>
      )}
    </>
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
    margin-bottom: 20px;

    span {
      margin-left: 20px;
    }
  }

  ul,
  ol {
    margin: 0;
    font-family: Cambria, Georgia, serif;
    li {
      word-break: break-word;
    }
  }

  p {
    margin: 0;
    min-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    font-size: 22px;
    font-family: Cambria, Georgia, serif;
    font-weight: 400;
  }
`;
