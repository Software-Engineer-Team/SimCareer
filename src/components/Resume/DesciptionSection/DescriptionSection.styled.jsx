import styled from "styled-components";
import { PersonalDetailContainer } from "../PersonalDetail/PersonalDetail.styeld";
export const Container = styled(PersonalDetailContainer)`
  margin-top: 10px;
  padding-right: 0;
  .item-container .description label {
    font-family: "Poppins", sans-serif;
    color: #52525a;
    font-size: 15px;
  }
  .item-container {
    .btns {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 10px;
      .btn-done {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px 12px 2px 4px;
        margin-left: 10px;
        width: 100px;
        background-color: #4314b6;
        font-family: "Poppins", sans-serif;
        cursor: pointer;
        border-radius: 4px;
        color: #fff;
        transition: all 0.15s ease-in-out;
        svg {
          padding: 2px;
          font-size: 30px;
        }
        &:hover {
          background-color: #5d25e7;
        }
      }
    }
  }
`;
