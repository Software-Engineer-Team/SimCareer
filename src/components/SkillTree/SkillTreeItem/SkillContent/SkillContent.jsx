import React, { useState } from "react";
import { Fade } from "react-reveal";
import Presentation from "../../Presentation/Presentation";

const SkillContent = ({
  src,
  text,
  content: { h1, pHead, lis, pTail, link },
}) => {
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

      {showPresentation && (
        <Presentation
          h1={h1}
          pHead={pHead}
          lis={lis}
          pTail={pTail}
          link={link}
          onClose={setShowPresentation}
        />
      )}
    </>
  );
};

export default SkillContent;
