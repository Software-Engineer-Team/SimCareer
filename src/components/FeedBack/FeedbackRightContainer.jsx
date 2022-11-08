import styled from "styled-components";

const FeedbackRightContainer = ({
  children,
  backgroundColor,
  textAlign,
  marginTop,
  marginBottom,
}) => {
  return (
    <FeedbackContainer
      backgroundColor={backgroundColor}
      textAlign={textAlign}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {children}
    </FeedbackContainer>
  );
};

export default FeedbackRightContainer;

const FeedbackContainer = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-align: ${({ textAlign }) => textAlign};
  padding: 15px;
  font-family: Cambria, Georgia, serif;
  font-size: 18px;
  font-weight: 500;
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};

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
