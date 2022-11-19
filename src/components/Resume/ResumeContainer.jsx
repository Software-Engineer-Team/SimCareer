import styled from "styled-components";

const ResumeRightContainer = ({
  children,
  backgroundColor,
  textAlign,
  marginTop,
  marginBottom,
}) => {
  return (
    <ResumeContainer
      backgroundColor={backgroundColor}
      textAlign={textAlign}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {children}
    </ResumeContainer>
  );
};

export default ResumeRightContainer;

const ResumeContainer = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-align: ${({ textAlign }) => textAlign};
  padding: 15px;
  font-family: Cambria, Georgia, serif;
  font-size: 18px;
  font-weight: 500;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  position: relative;
  z-index: 10;

  .italic-text {
    font-style: italic;
  }

  .align-text-left {
    text-align: left;
  }

  p {
    margin: 10px;
  }
`;
