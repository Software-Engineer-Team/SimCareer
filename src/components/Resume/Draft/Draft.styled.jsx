import styled from "styled-components";

export const EditorContainer = styled.div`
  box-sizing: border-box;
  border: 1px solid #ddd;
  cursor: text;
  padding: 16px;
  min-height: 200px;
  border-radius: 5px;
  margin-bottom: 1em;
  background: #f4f4f5;

  .DraftEditor-root {
    .DraftEditor-editorContainer {
      .public-DraftEditor-content {
        min-height: 200px;
      }
    }
  }

  & > div:last-child {
    background: transparent;
    border: 0 !important;
    border-top: 1px solid rgb(228, 228, 231) !important;
    box-shadow: none;
    padding: 10px;
    padding-bottom: 0;
    padding-left: 0;
    input {
      color: #000;
      font-size: 22px;
      padding: 0;
      font-weight: 500;
      width: 100%;
      border-bottom: 1px solid rgb(228, 228, 231);
      &::placeholder {
        color: #aaa;
      }
      &:focus {
        outline: none;
      }
    }

    div button {
      transition: all 0.15s ease-in-out;
      background-color: transparent;
      margin: 0 1px;
      cursor: pointer;
      border: 1px solid transparent;
      svg {
        color: #000;
        fill: #3f3f45;
      }
      &:hover {
        background-color: #f9f6fe;
        border: 1px solid #5d25e7;
        border-radius: 4px;
      }
    }
  }
`;

export const HeadlineButtonWrapper = styled.div`
  display: inline-block;
`;

export const HeadlineButton = styled.button`
  background: #fbfbfb;
  color: #888;
  font-size: 18px;
  border: 0;
  padding-top: 5px;
  vertical-align: bottom;
  height: 34px;
  width: 36px;

  &:hover,
  &:focus {
    background: #f3f3f3;
  }
`;
