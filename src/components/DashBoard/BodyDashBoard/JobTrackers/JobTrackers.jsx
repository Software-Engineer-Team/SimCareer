import { AiOutlinePlusSquare } from "react-icons/ai";
import { Fade } from "react-reveal";
import { Container } from "./JobTrackers.styled";

const JobTrackers = ({ src, title, text, address, link }) => {
  return (
    <Fade right>
      <Container>
        <div className="job">
          <div className="img">
            <img src={src} alt="" />
          </div>
          <div className="content">
            <div>
              <h5>{title}</h5>
              <p className="text-muted">{text}</p>
              <p className="text-muted">{address}</p>
            </div>
          </div>
          <a href={link} className="icon" target="_blank">
            <AiOutlinePlusSquare />
          </a>
        </div>
      </Container>
    </Fade>
  );
};

export default JobTrackers;
