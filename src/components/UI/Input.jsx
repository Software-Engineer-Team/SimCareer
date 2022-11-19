import React from "react";

import styled from "styled-components";

const Input = ({
  type,
  value,
  handler,
  error,
  label,
  width,
  widthContainer,
  paddingContainer,
}) => {
  return (
    <InputContainer
      width={width}
      widthContainer={widthContainer}
      paddingContainer={paddingContainer}
    >
      <div className="form-input-type">
        <label>{label}</label>
        {/* <span>*</span> */}
      </div>
      <div className="form-input-container">
        <div className="form-input-content">
          <input
            type={type}
            name="email"
            required
            onFocus={(e) => e.target.parentElement.classList.add("focus")}
            onBlur={(e) => e.target.parentElement.classList.remove("focus")}
            onChange={handler}
          />
        </div>
        <p className="form-input-error">{error}</p>
      </div>
    </InputContainer>
  );
};

export default Input;

export const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: ${({ widthContainer }) => (widthContainer ? widthContainer : "100%")};
  padding: ${({ paddingContainer }) =>
      paddingContainer ? paddingContainer : 0}px
    0;

  .form-input-type {
    font-weight: 500;
    font-size: 16px;
    text-align: left;
    color: #52525a;
    margin-bottom: 0.25rem;

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
    width: ${({ width }) => width};

    .form-input-content {
      border-radius: 4px;
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
      border: 1px solid transparent;
      height: 40px;
      background-color: #f4f4f5;

      &.focus {
        border-color: #5d25e7 !important;
        background-color: #f9f6fe;
      }

      &.error {
        border-color: rgb(211, 47, 47) !important;
      }

      &:hover {
        border-color: #5d25e7;
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
        font-size: 17px;
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
