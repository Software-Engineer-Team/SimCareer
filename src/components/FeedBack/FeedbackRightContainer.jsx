import styled from "styled-components";

const FeedbackRightContainer = ({ children, backgroundColor, textAlign }) => {
  return (
    <FeedbackContainer backgroundColor={backgroundColor} textAlign={textAlign}>
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
