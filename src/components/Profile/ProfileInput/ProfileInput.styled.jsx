import styled from "styled-components";

export const ProfileInputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 64px;
  margin-bottom: 0.8rem;

  .form-input-type {
    font-weight: 600;
    font-size: 16px;
    width: 220px;
    padding: 10px 0;
    text-align: left;
    font-family: Cambria, Georgia, serif;

    span {
      color: red;
      position: relative;
      margin-left: 3px;
    }
  }

  .form-input-container {
    display: inline-flex;
    flex-direction: column;
    align-items: ${({ type }) => type === "forgot-pass" && "center"};
    position: relative;
    width: 100%;

    .form-input-content {
      border-radius: 7px;
      font-size: 1rem;
      line-height: 1.4375em;
      letter-spacing: 0.00938em;
      color: rgba(0, 0, 0, 0.87);
      box-sizing: border-box;
      cursor: text;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      border: 1px solid rgba(0, 0, 0, 0.23);
      height: 40px;
      width: 432px;

      &.focus {
        border-color: #0e7fe1 !important;
      }

      &.error {
        border-color: rgb(211, 47, 47) !important;
      }

      &:hover {
        border-color: black;
      }

      & > input {
        padding: 9.5px 0px 9.5px 8px;
        border-width: 0px;
        border-top-left-radius: 7px;
        border-bottom-left-radius: 7px;
        height: 100%;
        width: 100%;

        background-color: transparent;
        outline: none;
        font: inherit;
        font-size: 13px;
        font-weight: 500;
      }
    }

    .form-input-error {
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.66;
      letter-spacing: 0.03333em;
      text-align: left;
      margin: 4px 14px 0px;
      color: rgb(211, 47, 47);
    }
  }
`;
