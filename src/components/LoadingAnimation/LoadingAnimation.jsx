import styled from "styled-components";

const LoadingAnimation = () => {
  return (
    <Container>
      <Image>
        <img src="/images/simcareer.png" alt="" />
      </Image>
      <Content>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Content>
    </Container>
  );
};

export default LoadingAnimation;

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: absolute;
  top: 0;

  &:before {
    position: absolute;
    inset: 0;
    content: "";
    background-color: #000;
    z-index: -1;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Image = styled.div`
  img {
    height: 255px;
    width: 255px;
    object-fit: cover;
  }

  border-radius: 50%;
  box-shadow: 0 0 8px white, inset 0 0 8px white;
  animation: zoomInOut 2s infinite;

  @keyframes zoomInOut {
    0% {
      transform: scale(1);
      box-shadow: 0 0 8px white, inset 0 0 8px white;
    }
    50% {
      transform: scale(0.9);
      box-shadow: 0 0 30px white, inset 0 0 30px white;
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 8px white, inset 0 0 8px white;
    }
  }
`;

const Content = styled.div`
  margin-top: 30px;
  width: 80px;
  display: flex;
  flex-wrap: wrap;
  animation: rotate 3s linear infinite;
  justify-self: flex-start;
  & span {
    width: 32px;
    height: 32px;
    background-color: red;
    margin: 4px;
    animation: scale 1.5s linear infinite;
    &:nth-child(1) {
      border-radius: 50% 50% 0 50%;
      background-color: #e77f67;
      transform-origin: bottom right;
    }
    &:nth-child(2) {
      border-radius: 50% 50% 50% 0;
      background-color: #778beb;
      transform-origin: bottom left;
      animation-delay: 0.5s;
    }
    &:nth-child(3) {
      border-radius: 50% 0 50% 50%;
      background-color: #f8a5c2;
      transform-origin: top right;
      animation-delay: 1.5s;
    }
    &:nth-child(4) {
      border-radius: 0 50% 50% 50%;
      background-color: #f5cd79;
      transform-origin: top left;
      animation-delay: 1s;
    }
  }
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes scale {
    50% {
      transform: scale(1.2);
    }
  }
`;
