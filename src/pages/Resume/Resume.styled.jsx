import styled from "styled-components";

export const ResumeContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #f5f5f5f5;
`;

export const ResumeContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 100%;
  /* padding: 10px 10px 10px 12px; */
  z-index: -1;
`;

export const ResumeContentLeft = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  .file-pdf {
    width: 100%;
    height: 100%;
    padding-bottom: 55px;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ResumeContentRight = styled.div`
  max-width: 700px;
  min-width: 700px;
  width: 50%;
  background-color: #ffffff;
  padding-bottom: 50px;

  .resume-content-right {
    margin: 0 auto;
  }
`;

export const ResumeHeader = styled.header`
  background: #231f20;
  width: 100%;
  color: #ffffff;
  display: flex;
  position: relative;
  z-index: 20;
  padding: 15px 35px;

  .feedback-image {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 190px;

    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }

    div {
      font-family: "Anton", sans-serif;
      margin-left: 5px;
      font-size: 23px;
    }
  }

  .cv-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 190px;

    .cv-name {
      font-family: "Anton", sans-serif;
      font-size: 27px;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        right: -30px;
        top: 0;
        width: 3px;
        height: 100%;
        background-color: #ffffff;
        z-index: 100;
      }
    }

    .file-name {
      font-family: Cambria, Georgia, serif;
      font-weight: 550;
      margin-left: 50px;
    }
  }
`;
