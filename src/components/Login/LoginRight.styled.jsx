import styled from "styled-components";

export const LoginRightContainer = styled.div`
  width: 60%;
  background-color: #2e2e2e;
  transition-duration: 1000ms;

  .login-right-content {
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    padding: 6.4rem;
    height: 100%;
    transition-duration: 1000ms;
    transition-property: background-color, border-color, color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    & > img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 50%;
    }

    .slick-img-content {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 150px;

      .slick-img-backup {
        background-color: rgb(216, 216, 216);
        border-radius: 12px;
        top: -100px;
        opacity: 0.25;
        height: 220px;
        width: 320px;
        position: absolute;
        z-index: 9;
        transition-duration: 500ms;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }

      & > img {
        &.hidden {
          transform: scale(0.8) translateY(-74px);
          opacity: 0;
        }

        height: 275px;
        width: 400px;
        z-index: 10;
        position: absolute;
        top: -70px;
        transition-duration: 500ms;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
    }

    .slick-img-title {
      font-size: 24px;
      font-weight: 600;
      margin-top: 290px;
      letter-spacing: 0.5px;
      color: #ffffff;
    }

    .slick-img-description {
      font-size: 16px;
      text-align: center;
      font-weight: 500;
      letter-spacing: 0.5px;
      color: #ffffff;
    }

    .slick-btn {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 80px;
      position: absolute;
      bottom: 100px;
      justify-content: space-between;

      .slick-dots {
        display: flex;
        align-items: center;
        gap: 3px;

        & > div {
          height: 5px;
          width: 5px;
          border-radius: 50%;
          background-color: #ffffff;
          opacity: 0.25;

          &.dot-active {
            opacity: 1;
          }
        }
      }

      .slick-btn-back,
      .slick-btn-forward {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        svg {
          font-size: 24px;
        }
      }
    }
  }
`;
