import { Judgement } from "@components/index";
import { Container, Content } from "./Judgements.styled";

const Judgements = () => {
  return (
    <Container>
      <div className="image-logo">
        <img src="/images/simcareer-logo.png" alt="Logo" />
      </div>
      <Content>
        <Judgement />
      </Content>
    </Container>
  );
};

export default Judgements;
