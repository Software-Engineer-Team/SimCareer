import styled from "styled-components";

export const LoginLeftContainer = styled.div`
  background-color: rgb(249, 249, 251);
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 40%;
  overflow: hidden;

  .react-reveal {
    animation-duration: 700ms !important;
  }

  .login-left-content {
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 450px;
    transition: all 100ms ease-in-out;
    min-height: 700px;

    .login-left-content-inner {
      opacity: 1;
      width: 100%;

      .login-left-title {
        font-size: 28px;
        margin-bottom: 0.8rem;
        font-weight: 600;
        line-height: 1.1;
        color: rgb(52, 52, 52);
      }

      .registration-steps-breadcrumb,
      .forgot-pass-steps-breadcrumb {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 4rem;
        gap: 8px;

        .step-circle {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: 1px solid rgb(110, 110, 110);

          &.current {
            border: none;
            background: rgb(36, 36, 36);
          }
        }

        .next-line {
          width: 69px;
          height: 0.5px;
          border: 0.5px solid rgb(151, 151, 151);
        }
      }

      .registration-content {
        font-size: 20px;
        margin-bottom: 3.2rem;
        width: 100%;
        text-align: center;
      }

      .forgot-pass-content {
        font-weight: 600;
        font-size: 16px;
        color: rgb(110, 110, 110);
        text-align: center;
        margin-bottom: 12px;
        margin-top: 40px;
      }

      .registration-content-verification,
      .forgot-pass-content-verification {
        font-size: 16px;
        color: rgb(110, 110, 110);
        margin-bottom: 40px;
        text-align: center;

        .text-red {
          font-size: 20px;
          color: rgb(244, 67, 54);
        }
      }

      .enter-text {
        font-weight: 700;
        font-size: 16px;
        color: rgb(110, 110, 110);
        text-align: center;
        margin-bottom: 0.8rem;
      }

      .get-code-again {
        font-size: 11px;
        color: rgb(233, 11, 53);
        text-align: center;
        cursor: pointer;
        margin-top: 0.4rem;
        margin-bottom: 2.8rem;

        &:hover {
          text-decoration: underline;
        }
      }

      .login-left-welcome {
        line-height: 1.2;
        margin-bottom: 2.8rem;
        font-size: 14px;
        color: rgb(116, 116, 116);
      }

      .break-line {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 0.4rem;
        & > div {
          height: 1px;
          width: 100%;
          background-color: #e2dfdf;
        }
      }

      .login-google {
        display: flex;
        justify-content: center;

        button {
          width: 332px;
          height: 40px;
          box-shadow: none !important;
          border-color: rgba(0, 0, 0, 0.12) !important;
          border-radius: 7px !important;
          justify-content: center;
          background-color: rgb(255, 255, 255) !important;
          cursor: pointer !important;

          & > div {
            background-color: transparent !important;
            margin-right: 0px !important;
            padding-right: 0px !important;

            & > svg {
              margin-top: 4px;
              width: 21px;
              height: 21px;
            }
          }
          & > span {
            margin-left: 4px !important;
            font-size: 14px !important;
            font-weight: 700 !important;
            color: rgb(179, 179, 179) !important;
            letter-spacing: 1px !important;
          }

          &:hover {
            background-color: #fcfcfc !important;
          }
        }
      }
    }
  }

  .login-left-register,
  .signup-left,
  .forgot-pass-left {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    padding-bottom: 3.2rem;

    .login-left-register-text,
    .signup-left-text,
    .forgot-pass-left-text {
      text-align: center;

      & > span {
        color: inherit;
      }

      & > a {
        text-decoration: none;
        font-weight: 700;
        color: inherit;
      }
    }
  }
`;

export const LoginLeftForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  & > a {
    width: 100%;
    text-decoration: none;
    display: inline-block;
    text-align: right;
    font-size: 14px;
    color: rgb(52, 52, 52);
    font-weight: 700;
  }
  .ReactInputVerificationCode__container {
    justify-content: flex-start;
  }
`;

export const LoginLeftFormItem = styled.div`
  display: flex;
  align-items: flex-start;
  height: 64px;
  margin-bottom: 0.8rem;

  .form-input-type {
    font-weight: 700;
    font-size: 16px;
    width: 220px;
    padding-top: 10px;
    text-align: left;
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
      width: ${({ type }) => type === "forgot-pass" && "332px"};

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

      & > input[type="password"] {
        cursor: pointer;
      }

      & > input[type="date"] {
        cursor: pointer;
        padding-right: 8px;
      }

      .form-input-content-icon {
        margin-left: 8px;
        margin-right: 8px;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.54);
        font-size: 1.2rem;
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

export const LoginLeftBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  width: 100%;
  margin-top: 28px;
  position: relative;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: rgb(255, 255, 255);
    height: 40px;
    border-radius: 7px;
    text-transform: none;
    font-weight: 700;
    background-color: rgb(58, 58, 58);
    width: 332px;
    min-width: 64px;
    padding: 6px 16px;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    border: 0px;
    cursor: pointer;

    &.disabled {
      color: rgba(0, 0, 0, 0.26);
      background-color: rgba(0, 0, 0, 0.12);
      pointer-events: none;
    }

    &:hover {
      background-color: rgb(26, 26, 26);
      text-decoration: none;
      box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
        rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px;
    }
  }
`;
