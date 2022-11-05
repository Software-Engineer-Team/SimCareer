import styled from "styled-components";

const CircularProgress = ({ top }) => {
  return <CircularProgressContainer top={top} />;
};

const CircularProgressContainer = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  z-index: 3;
  position: absolute;
  top: ${({ top }) => top}px;
  &:after {
    content: "";
    display: block;
    width: 34px;
    height: 34px;
    margin: 13px 3px 3px 3px;
    border-radius: 50%;
    border: 6px solid teal;
    border-color: white white white transparent;
    animation: spinner 1.2s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default CircularProgress;
