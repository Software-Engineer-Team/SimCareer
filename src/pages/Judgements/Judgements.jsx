import { Judgement } from "@components/index";
import { useEffect } from "react";
import { Container, Content } from "./Judgements.styled";

const Judgements = () => {
  useEffect(() => {
    document.getElementById("particles-js").style.visibility = "visible";
    return () => {
      document.getElementById("particles-js").style.visibility = "hidden";
    };
  }, []);
  return (
    <Container>
      {/* <div className="image-logo"> */}
      {/*   <img src="/images/simcareer-logo.png" alt="Logo" /> */}
      {/* </div> */}
      <Content>
        <Judgement />
      </Content>
    </Container>
  );
};

export default Judgements;
