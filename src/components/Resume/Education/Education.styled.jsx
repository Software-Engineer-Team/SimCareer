import styled from "styled-components";
import { PersonalDetailContainer } from "../PersonalDetail/PersonalDetail.styeld";
export const EducationContainer = styled(PersonalDetailContainer)`
  margin-top: 10px;
  .education-items {
    width: 100%;
    margin-bottom: 1rem;
    .education-item-container {
      width: 100%;
      border: 1px solid #e4e4e7;
      border-radius: 8px;
      margin: 10px 0;
      --tw-border-opacity: 1;
      border-color: rgb(162 162 168 / var(--tw-border-opacity));
      .education-item-content {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        padding-left: 0px;
        .education-item-title {
          flex-grow: 1;
          padding: 0.75rem 1.25rem;
          height: 100%;
          .education-title-container {
            padding: 0.5rem;
            font-size: 18px;
            font-family: "Poppins", sans-serif;
          }
        }
        .education-btn {
          padding: 1rem;
          .education-btn-container {
            padding: 0.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #e4e4e7;
            border-radius: 6px;
            border-color: rgb(162 162 168 / var(--tw-border-opacity));
            cursor: pointer;
            &:hover {
              background-color: #f9f6fe;
              border-color: #5d25e7;
            }

            svg {
              font-size: 20px;
              padding: 2px;
            }
          }
        }
      }
    }

    .education-item-detail {
      padding: 0.75rem 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .education-item-intro {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }
      .education-date {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .add-btn {
      padding: 12px 0;
      width: 100%;
      .btn-icon-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .btn-icon-content {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 5px 10px;
          border: 1px solid #e4e4e7;
          border-radius: 6px;
          --tw-border-opacity: 1;
          border-color: rgb(162 162 168 / var(--tw-border-opacity));
          cursor: pointer;
          &:hover {
            background-color: #f9f6fe;
            border-color: #5d25e7;
          }

          .btn-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 5px;
            svg {
              font-size: 23px;
            }
          }
          .btn-text {
            font-size: 18px;
            font-family: "Poppins", sans-serif;
            color: #3f3f45;
          }
        }
      }
    }
  }
`;
