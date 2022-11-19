import styled from "styled-components";

export const DocumentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50px;
  left: 20px;
`;

export const DocumentContent = styled.div`
  background: #ffffff;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 25%);
  width: 31cm;
  min-width: 31cm;
  min-height: 29.7cm;
  display: inline-block;
  transform-origin: 0px 0px 0px;
  transform: matrix(0.544816, 0, 0, 0.464816, 232.161, 375.849);
  /* zoom: inherit; */
  transition: all 0.1s linear 0s;
  will-change: transform;

  /* @media print { */
  /*   width: 3508px; */
  /*   height: 2480px; */
  /* } */
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const BodyLeft = styled.div`
  width: 65%;
  padding: 20px;
`;

export const BodyRight = styled.div`
  background: #453a98;
  width: 35%;
  padding: 20px;
`;
