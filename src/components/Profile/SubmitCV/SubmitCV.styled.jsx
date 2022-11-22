import styled from "styled-components";

export const SubmitCvContainer = styled.div`
  position: fixed;
  z-index: 1300;
  inset: 0px;

  .submit-form {
    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    height: 100%;
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .submit-form-content {
      width: 600px;
      max-width: 900px;
      min-height: 200px;
      display: flex;
      max-height: calc(100% - 64px);
      flex-direction: column;
      margin: 32px;
      position: relative;
      box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%),
        0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);
      color: rgba(0, 0, 0, 0.87);
      transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      background-color: #fff;
      border-radius: 4px;
      padding: 30px;
      overflow-y: auto;

      .submit-form-head {
        display: flex;
        justify-content: space-between;
        h3 {
          margin: 0;
        }

        .btn-container {
          display: flex;
          align-items: flex-start;

          .btn {
            background-color: transparent;
            outline: none;
            border: 0;
            font-size: 20px;

            svg {
              position: relative;
              top: -7px;
              cursor: pointer;
              color: #bdbbbb;
              font-size: 30px;
              border-radius: 50%;

              &:hover {
                background-color: #0000001a;
              }
            }
          }
        }
      }

      & > p {
        margin: 0;
        margin-top: 15px;
        font-size: 16px;
        font-family: Cambria, Georgia, serif;
      }

      .submit-form-middle {
        background-color: #00000010;
        border: 7px dashed #0000001a;
        min-height: 200px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        .file-name {
          font-family: Cambria, Georgia, serif;
          font-style: italic;
          font-weight: 400;
        }
      }

      .submit-form-footer {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        list-style: none;
        margin-top: 30px;

        .menu-logo {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            width: 35px;
            height: 35px;
            object-fit: cover;
          }
          div {
            font-family: "Anton", sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 10px;
            height: 15px;
          }
        }

        .file-name {
          font-size: 13px;
          font-weight: 700;
          margin-top: 9px;
          margin-left: 15px;
        }
      }
    }
  }
`;
