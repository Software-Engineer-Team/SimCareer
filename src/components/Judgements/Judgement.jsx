import styled from "styled-components";
import FormControlAnswers from "./FormControlAnswers/FormControlAnswers";

const Judgement = () => {
  return (
    <Container>
      <FormControlAnswers />
    </Container>
  );
};

export default Judgement;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
