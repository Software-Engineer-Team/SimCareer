import { Fade } from "react-reveal";
import { PresentationContainer } from "./Presentation.styled";

const Presentation = ({ onClose }) => {
  const closeHandler = () => {
    onClose();
  };

  return (
    <PresentationContainer>
      <div className="back-drop"></div>
      <Fade bottom>
        <div className="dialog-container">
          <div className="dialog-content">
            <div className="dialog-content-des">
              <div className="virtual-env">
                <h1>Case Overview</h1>
                <p className="text-muted">Snippets - 5 min read</p>
                <h2>Introduction</h2>
                <p>We’d like to learn more about the following:</p>
                <ul>
                  <li>
                    How the economics of land-based &amp; ocean-based salmon
                    farming compare?
                  </li>

                  <li>
                    Outlook for salmon pricing globally for H2 2021 &amp; 2022?
                  </li>

                  <li>
                    Is the cost to produce salmon increasing or decreasing and
                    why?”
                  </li>
                </ul>
                <p>
                  In every project, we follow a process called BREAD, which is
                  composed of 5 steps: Brief, Research, Engagement and
                  Assessment, Deliver.
                </p>
              </div>
            </div>
            <div className="btn-container">
              <button className="btn" type="button" onClick={closeHandler}>
                <span className="label">CLOSE</span>
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </PresentationContainer>
  );
};

export default Presentation;
