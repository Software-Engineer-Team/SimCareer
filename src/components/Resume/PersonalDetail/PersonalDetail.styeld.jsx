import styled from "styled-components";

export const PersonalDetailContainer = styled.div`
  .personal-detail {
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid #e4e4e7;
    .personal-detail-header {
      /* border-bottom: 1px solid #e4e4e7; */
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 5px 10px 0;
      .header-title {
        font-family: "Poppins", sans-serif;
        text-align: left;
        padding: 0.5rem 0;
        flex-grow: 1;
        color: #2e2e33;
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.75rem;
        overflow: hidden;
      }
      .header-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        /* .toggle-icon { */
        /*   --tw-border-opacity: 1; */
        /*   border: 1px solid rgb(162 162 168 / var(--tw-border-opacity)); */
        /*   padding: 0.25rem; */
        /*   border-radius: 5px; */
        /*   cursor: pointer; */
        /*   svg { */
        /*     font-size: 1.25rem; */
        /*     line-height: 1.5rem; */
        /*     display: flex; */
        /*     align-items: center; */
        /*     justify-content: center; */
        /*     font-weight: bold; */
        /*   } */
        /* } */
      }
    }
    .personal-detail-content {
      width: 100%;
      .detail-intro {
        display: flex;
        .detail-intro-img-container {
          padding-right: 1rem;
          .detail-intro-img-content {
            width: 8rem;
            padding: 0.5rem 0;
            display: flex;
            flex-direction: column;
            .img-header {
              display: flex;
              margin-bottom: 0.25rem;
              --tw-text-opacity: 1;
              color: rgb(82 82 90 / var(--tw-text-opacity));
              font-size: 1rem;
              font-weight: 500;
              line-height: 1.25rem;
              .img-header-text {
                flex-grow: 1;
              }
              .img-header-btn {
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
            .img-content {
              position: relative;
              font-size: 1rem;
              line-height: 1.5rem;
              padding: 0.5rem 0.75rem;
              background-color: #f4f4f5;
              min-width: 124px;
              min-height: 124px;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 0.25rem;
              border: 1px solid #f4f4f5;
              cursor: pointer;
              transition: all 0.1s ease-in-out;
              &:hover {
                border-color: #5d25e7;
              }
              .show-img {
                img {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  border-radius: 0.25rem;
                }
              }
              svg {
                color: #a2a2a8;
                font-size: 22px;
              }
            }
          }
        }
        .detail-intro-input {
          padding-top: 8px;
          flex-grow: 1;
          display: flex;
          flex-wrap: wrap;
        }
      }
    }
  }
`;
