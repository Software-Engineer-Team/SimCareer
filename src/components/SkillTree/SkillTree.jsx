import { SkillTreeContainer, SkillTreeContent } from "./SkillTree.styled";
import SkillTreeItem from "./SkillTreeItem/SkillTreeItem";
import skillTrees from "@assets/data/skill-tree";
import { Flip } from "react-reveal";

const SkillTree = () => {
  return (
    <SkillTreeContainer>
      <SkillTreeContent>
        <Flip left>
          <div className="skill-tree-title">Skill Tree</div>
        </Flip>
        {skillTrees.map(({ skillTreeTitle, skillTreeContents }, idx) => (
          <SkillTreeItem
            skillTreeTitle={skillTreeTitle}
            skillTreeContents={skillTreeContents}
            key={idx}
          />
        ))}
      </SkillTreeContent>
    </SkillTreeContainer>
  );
};

export default SkillTree;
