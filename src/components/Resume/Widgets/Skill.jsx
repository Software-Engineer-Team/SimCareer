import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useImportWidget from "@hooks/useImportWidget";

const SkillItem = ({ name, descriptionHtml, idx }) => {
  useImportWidget({ html: descriptionHtml, elId: "SKILL_" + idx });
  return (
    <div className="skill-content">
      <h4>{name}</h4>
      <div className="skill-content-item" id={"SKILL_" + idx}></div>
    </div>
  );
};

const Skill = () => {
  const { skill } = useSelector((state) => state.resume);
  return (
    <>
      {skill?.[0].descriptionHtml && (
        <SkillContainer>
          <div className="skill">
            <div className="title">
              <span>Kỹ năng</span>
            </div>
            {skill.map(({ name, descriptionHtml }, idx) => {
              return (
                <SkillItem
                  name={name}
                  descriptionHtml={descriptionHtml}
                  idx={idx}
                  key={idx}
                />
              );
            })}
          </div>
        </SkillContainer>
      )}
    </>
  );
};

export default Skill;

const SkillContainer = styled.div`
  width: 100%;
  .skill {
    width: 100%;
    .title {
      background: #453a98;
      color: #ffffff;
      padding: 2px 10px 2px 5px;
      font-size: 40px;
      text-transform: uppercase;
      font-weight: 500;
      margin-bottom: 20px;

      span {
        margin-left: 20px;
      }
    }

    h4 {
      min-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
      text-transform: uppercase;
      margin: 0px;
      /* margin-top: 20px; */
      font-size: 25px;
      font-family: Cambria, Georgia, serif;
      font-weight: 600;
    }

    p {
      margin: 0;
    }

    .skill-content {
      padding: 0px 20px 20px 20px;

      .skill-content-item {
        margin-left: 20px;
        h4 {
          margin-top: 0;
          font-size: 22px;
          text-transform: none;
        }
        ul,
        ol,
        p {
          margin: 0;
          word-break: break-word;
        }
      }
    }
  }
`;
