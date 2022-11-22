import React from "react";
import { useSelector } from "react-redux";
import { Gallery, ImagesPreview } from "@components/index";
import styled from "styled-components";
import useImportWidget from "@hooks/useImportWidget";
const ExperienceItem = ({
  company,
  position,
  city,
  startDate,
  endDate,
  image,
  file,
  descriptionHtml,
  idx,
}) => {
  useImportWidget({ html: descriptionHtml, elId: "EXPERIENCE_" + idx });
  return (
    <>
      <h4>
        {company}
        {city && company ? ", ".concat(city) : city}
      </h4>
      <p className="time">
        {company && (
          <i>
            {startDate.month + "/" + startDate.year} -{" "}
            {endDate.month + "/" + endDate.year}
          </i>
        )}
      </p>
      <div className="company-content">
        <div className="company-content-item" id={"EXPERIENCE_" + idx}>
          <h4>{position}</h4>
        </div>
        {image?.url && (
          <Gallery>
            <ImagesPreview
              url={image?.url}
              fileName={image?.name}
              isRight={false}
            />
          </Gallery>
        )}
      </div>
    </>
  );
};

const Experience = () => {
  const { experience } = useSelector((state) => state.resume);
  return (
    <>
      {experience?.[0].descriptionHtml && (
        <ExperienceContainer>
          <div className="company">
            <div className="title">
              <span>Kinh nghiệm</span>
            </div>
            {experience.map(
              (
                {
                  company,
                  position,
                  city,
                  startDate,
                  endDate,
                  image,
                  file,
                  descriptionHtml,
                },
                idx
              ) => {
                return (
                  <ExperienceItem
                    company={company}
                    position={position}
                    city={city}
                    startDate={startDate}
                    endDate={endDate}
                    descriptionHtml={descriptionHtml}
                    image={image}
                    file={file}
                    key={idx}
                    idx={idx}
                  />
                );
              }
            )}
          </div>
        </ExperienceContainer>
      )}
    </>
  );
};

export default Experience;

const ExperienceContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  .company {
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
      font-size: 25px;
      font-family: Cambria, Georgia, serif;
      font-weight: 600;
    }

    p {
      margin: 0;
    }

    .company-content {
      padding: 0px 20px 20px 20px;

      .company-content-item {
        h4 {
          margin-top: 3px;
          font-size: 24px;
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
