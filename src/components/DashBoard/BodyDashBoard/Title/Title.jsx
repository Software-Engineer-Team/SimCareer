import styled from "styled-components";

const Title = ({
  fontWeight,
  text,
  fontSize,
  fontFamily,
  color,
  position,
  top,
  left,
  number,
}) => {
  return (
    <Text
      fontSize={fontSize}
      fontFamily={fontFamily}
      color={color}
      position={position}
      top={top}
      left={left}
      fontWeight={fontWeight}
      className={`title-${number}`}
    >
      {text}
    </Text>
  );
};

export default Title;

const Text = styled.div`
  position: ${({ position }) => position};
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "550")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "22")}px;
  line-height: 1.1;
  letter-spacing: 1px;
  margin-bottom: 30px;
  color: ${({ color }) => (color ? color : "black")};
  font-family: ${({ fontFamily }) =>
      fontFamily ? fontFamily : "Origin Tech Demo"},
    sans-serif;
  min-width: 300px;
  text-transform: uppercase;
  z-index: 100;

  @media screen and (max-width: 500px) {
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;
