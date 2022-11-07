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
`;
