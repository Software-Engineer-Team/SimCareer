import React from "react";
import Wave from "react-wavify";
import styled from "styled-components";

export default function WayAnimation({ top, height }) {
  return (
    <WaveContainer>
      <WaveContent top={top} height={height}>
        <Wave
          fill="url(#gradient)"
          options={{
            height: 58,
            amplitude: 58,
            speed: 0.35,
            points: 6,
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="20%" stopColor="#202e51" />
              {/* <stop offset="90%" stopColor="#1277b0" /> */}
            </linearGradient>
          </defs>
        </Wave>
      </WaveContent>
    </WaveContainer>
  );
}

const WaveContainer = styled.div`
  width: 100%;
`;

const WaveContent = styled.div`
  width: 100%;
  z-index: 10;
  position: absolute;
  top: ${({ top }) => top}px;
  & > div {
    & svg {
      width: 100%;
      min-height: 1000px;
      height: ${({ height }) => height};
      z-index: -100;
      & path {
        z-index: -100;
      }
    }
  }

  @media screen and (max-width: 500px) {
    & > div {
      & svg {
        min-height: auto;
      }
    }
  }
`;
