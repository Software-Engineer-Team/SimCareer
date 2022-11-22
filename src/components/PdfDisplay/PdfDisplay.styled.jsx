import styled from "styled-components";
export const PdfContainer = styled.div`
  height: 100%;
  width: 100%;

  .file-pdf {
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
    padding-top: 70px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    embed {
      width: 100%;
      height: 100%;
      min-width: 100%;
    }
  }
`;

export const PdfContent = styled.div`
  .react-pdf__Document {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > p {
      margin: 0;
      font-family: Cambria, Georgia, serif;
      font-size: 16px;
      color: #fff;
      z-index: 100;
    }
    .btn-container {
      display: flex;
      margin-bottom: 30px;
      width: 400px;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
    }
  }

  .react-pdf__Page {
    max-width: calc(100% - 2em);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    margin: 1em;
    z-index: 100;
  }

  .react-pdf__Page canvas {
    max-width: 100%;
    min-width: 612px;
    overflow: scroll;
  }

  .react-pdf__message {
    padding: 20px;
    color: white;
  }
`;
