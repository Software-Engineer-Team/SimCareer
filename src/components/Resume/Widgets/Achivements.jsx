import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useImportWidget from "~/hooks/useImportWidget";
import { Gallery, ImagesPreview, PdfDisplay, Portal } from "@components/index";

const AchivementsItem = ({ name, image, file, descriptionHtml, idx }) => {
  useImportWidget({ html: descriptionHtml, elId: "ACHIEVEMENTS_" + idx });

  const toggleShowFile = () => {
    setShowFile(!showFile);
  };
  const [showFile, setShowFile] = useState(false);
  return (
    <>
      {name && !image?.url ? (
        <h4>{name}</h4>
      ) : (
        <Gallery>
          <ImagesPreview
            url={image?.url}
            fileName={name}
            style={{ color: "white" }}
          />
        </Gallery>
      )}
      <div className="achievements-content" id={"ACHIEVEMENTS_" + idx}></div>

      {file?.url && (
        <div
          style={{ color: "#ffffff" }}
          onClick={() => {
            setShowFile(!showFile);
          }}
        >
          {file.name}
        </div>
      )}

      {showFile && (
        <Portal>
          <PdfDisplay cb={toggleShowFile} url={file?.url} />
        </Portal>
      )}
    </>
  );
};

const Achivements = () => {
  const { achievement } = useSelector((state) => state.resume);

  return (
    <>
      {achievement?.[0].descriptionHtml && (
        <AchivementContainer>
          <div className="achivement" id="ACHIEVEMENTS">
            <div className="title">
              <span>Thành tích</span>
            </div>
            {achievement.map(({ name, file, image, descriptionHtml }, idx) => {
              return (
                <AchivementsItem
                  name={name}
                  descriptionHtml={descriptionHtml}
                  file={file}
                  image={image}
                  key={idx}
                  idx={idx}
                />
              );
            })}
          </div>
        </AchivementContainer>
      )}
    </>
  );
};

export default Achivements;

const AchivementContainer = styled.div`
  width: 100%;
  color: #ffffff;
  margin-top: 20px;

  .achivement {
    width: 100%;

    h4 {
      margin: 0;
    }
    .title {
      background: #453a98;
      font-size: 40px;
      text-transform: uppercase;
      font-weight: 500;

      span {
        margin-left: 0px;
      }
    }

    ul,
    ol {
      margin: 0;
      font-family: Cambria, Georgia, serif;
      word-break: break-word;
    }

    p {
      min-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
      margin: 0px;
      font-size: 22px;
      font-family: Cambria, Georgia, serif;
      font-weight: 400;
    }
  }

  .achievements-content {
    margin-left: 6px;
    h4 {
      min-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
      margin: 0px;
      font-size: 24px;
      font-family: Cambria, Georgia, serif;
      font-weight: 600;
    }
    ul,
    ol,
    p {
      font-size: 20px;
      font-family: Cambria, Georgia, serif;
      margin: 0;
      word-break: break-word;
    }
  }
`;
