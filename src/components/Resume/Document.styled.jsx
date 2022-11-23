import styled from "styled-components";

export const DocumentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -70px;
  left: 20px;

  a {
    outline: none;
    text-decoration: none;
    color: #453a98;
  }
`;

export const DocumentContent = styled.div`
  background: #ffffff;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
  width: 31cm;
  min-width: 31cm;
  min-height: 29.7cm;
  height: 29.7cm;
  /* max-height: 40cm; */
  display: inline-block;
  transform-origin: 0px 0px 0px;
  transform: matrix(0.544816, 0, 0, 0.544816, 232.161, 195.849);
  transition: all 0.1s linear 0s;
  will-change: transform;

  /* @media print { */
  /*   width: 3508px; */
  /*   height: 2480px; */
  /* } */

  .join-with-us {
    max-width: 1400px;
    margin: 0 auto;
    margin-bottom: 70px;
    display: flex;
    position: relative;
    z-index: 100;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    --btn-color: #771fd3;

    h3 {
      font-size: 40px;
      font-style: italic;
      font-family: Cambria, Georgia, serif;
      font-weight: 700;
      color: black;
    }

    .join-logo {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;

      img {
        width: 90px;
        height: 90px;
        object-fit: cover;
      }
    }

    .join-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;

      .join-btn-content {
        padding: 5px 0px;
        width: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--btn-color);
        border-radius: 10px;
        color: #ffffff;
        transition: all 100ms ease-in;
        border: 1px solid var(--btn-color);
        cursor: pointer;
        text-decoration: none;

        &:hover {
          background-color: #ffffff;
          color: var(--btn-color);
        }

        & > span {
          font-family: "Anton", sans-serif;
          font-size: 23px;
          text-transform: uppercase;
          font-weight: 400 !important;
        }
      }
    }
  }
`;

export const JoinWithUsContainer = styled.div`
  position: absolute;
  bottom: 30px;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 60px;
  display: flex;
  z-index: 100;
  right: 10px;
  flex-direction: column;
  --btn-color: #771fd3;

  h3 {
    font-size: 20px;
    font-style: italic;
    font-family: Cambria, Georgia, serif;
    font-weight: 700;
    color: black;
  }

  .join-logo {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    img {
      width: 30px;
      height: 30px;
      object-fit: cover;
    }
  }

  .join-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    .join-btn-content {
      padding: 5px 0px;
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--btn-color);
      border-radius: 10px;
      color: #ffffff;
      transition: all 100ms ease-in;
      border: 1px solid var(--btn-color);
      cursor: pointer;
      text-decoration: none;

      &:hover {
        background-color: #ffffff;
        color: var(--btn-color);
      }

      & > span {
        font-family: "Anton", sans-serif;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 400 !important;
      }
    }
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const BodyLeft = styled.div`
  width: 65%;
  background-color: #ffffff;
  height: 100%;
  padding: 20px;
`;

export const BodyRight = styled.div`
  background: #453a98;
  width: 35%;
  padding: 20px;
`;
