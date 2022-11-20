import styled from "styled-components";
export const EntriesSectionItemContainer = styled.div`
  .item-container {
    width: 100%;
    border: 1px solid #e4e4e7;
    border-radius: 8px;
    margin-top: 20px;
    margin-bottom: 10px;
    --tw-border-opacity: 1;
    border-color: rgb(162 162 168 / var(--tw-border-opacity));
    .item-content {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      padding-left: 0px;
      .item-title {
        flex-grow: 1;
        padding: 0.75rem 1.25rem;
        height: 100%;
        .title-container {
          padding: 0.5rem;
          font-size: 18px;
          font-family: "Poppins", sans-serif;
        }
      }
      .btn {
        padding: 1rem;
      }
    }
    .item-detail {
      padding: 0.75rem 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .item-intro {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }
      .date {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .description {
        width: 100%;
        margin-top: 20px;
        .form-type {
          font-weight: 500;
          font-size: 16px;
          text-align: left;
          color: #52525a;
          margin-bottom: 0.25rem;
          font-family: Cambria, Georgia, serif;
        }
      }

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
  }
`;
