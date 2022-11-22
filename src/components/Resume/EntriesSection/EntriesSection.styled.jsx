import styled from "styled-components";
import { PersonalDetailContainer } from "../PersonalDetail/PersonalDetail.styeld";
export const Container = styled(PersonalDetailContainer)`
  margin-top: 10px;
  padding-right: 0;
  position: relative;
  .items {
    width: 100%;
    margin-bottom: 1rem;

    .add-btn {
      padding-top: 12px;
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
