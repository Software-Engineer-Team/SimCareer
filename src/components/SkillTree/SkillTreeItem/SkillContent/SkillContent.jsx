import React, { useState } from "react";
import { Fade } from "react-reveal";
import Presentation from "../../Presentation/Presentation";

const SkillContent = ({ src, text }) => {
  const [showPresentation, setShowPresentation] = useState(false);

  return (
    <>
      <Fade right>
        <div className="skill-tree-content">
          <div
            className="skill-tree-content-img"
            onClick={() => {
              setShowPresentation(true);
            }}
          >
            <img src={src} alt="" />
          </div>
          <div className="skill-tree-text">{text}</div>
          <div className="click-for-more" title="Click to read more !">
            <span className="poppins">S</span>
          </div>
        </div>
      </Fade>

      {showPresentation && <Presentation onClose={setShowPresentation} />}
    </>
  );
};

export default SkillContent;
