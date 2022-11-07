import React from "react";
import { Fade } from "react-reveal";
import SkillContent from "./SkillContent/SkillContent";
import { SkillTreeItemContainer } from "./SkillTreeItem.styled";

const SkillTreeItem = ({ skillTreeTitle, skillTreeContents }) => {
  return (
    <SkillTreeItemContainer>
      <Fade bottom>
        <div className="skill-tree-content-title">{skillTreeTitle}</div>
      </Fade>
      <div className="skill-tree-content-list">
        {skillTreeContents.map(({ src, text, content }, idx) => (
          <SkillContent src={src} text={text} content={content} key={idx} />
        ))}
      </div>
    </SkillTreeItemContainer>
  );
};

export default SkillTreeItem;
