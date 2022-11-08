import styled from "styled-components";

export const PDFContainer = styled.div`
  .react-pdf__Document {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > p {
      margin: 0;
      font-family: Cambria, Georgia, serif;
      font-size: 16px;
    }
    .btn-container {
      display: flex;
      margin-bottom: 30px;
      width: 400px;
      justify-content: space-between;
      align-items: center;
    }
  }

  .react-pdf__Page {
    max-width: calc(100% - 2em);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    margin: 1em;
  }

  .react-pdf__Page canvas {
    max-width: 100%;
    min-width: 612px;
    /* min-height: 1300px; */
    /* min-width: 1000px; */
    overflow: scroll;
  }

  .react-pdf__message {
    padding: 20px;
    color: white;
  }
`;
