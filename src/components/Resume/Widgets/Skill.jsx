import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useImportWidget from "@hooks/useImportWidget";
import { Gallery, ImagesPreview, PdfDisplay, Portal } from "@components/index";

const SkillItem = ({ name, descriptionHtml, image, file, idx }) => {
  useImportWidget({ html: descriptionHtml, elId: "SKILL_" + idx });

  const toggleShowFile = () => {
    setShowFile(!showFile);
  };
  const [showFile, setShowFile] = useState(false);

  return (
    <>
      <div className="skill-content">
        {!image?.url && name ? (
          <h4>{name}</h4>
        ) : (
          <Gallery>
            <ImagesPreview url={image?.url} fileName={name} />
          </Gallery>
        )}
        <div className="skill-content-item" id={"SKILL_" + idx}></div>
        {file?.url && (
          <div
            style={{ color: "#453a98" }}
            onClick={() => {
              setShowFile(!showFile);
            }}
          >
            {file.name}
          </div>
        )}
      </div>

      {showFile && (
        <Portal>
          <PdfDisplay cb={toggleShowFile} url={file?.url} />
        </Portal>
      )}
    </>
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
            {skill.map(({ name, descriptionHtml, image, file }, idx) => {
              return (
                <SkillItem
                  name={name}
                  descriptionHtml={descriptionHtml}
                  image={image}
                  file={file}
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
      margin: 0px;
      /* margin-top: 20px; */
      font-size: 25px;
      font-weight: 500;
    }

    p {
      margin: 0;
    }

    .skill-content {
      padding: 0px 0px 20px 0px;

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
