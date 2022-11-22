import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useImportWidget from "~/hooks/useImportWidget";

const EducationItem = ({
  idx,
  school,
  city,
  specialize,
  startDate,
  endDate,
  descriptionHtml,
}) => {
  useImportWidget({ html: descriptionHtml, elId: "EDUCATION_" + idx });

  return (
    <div className="education-content" id={"EDUCATION_" + idx}>
      <h4>
        <div className="school">{school}</div>
        <div className="city">{city}</div>
      </h4>
      <div className="education-content-item">
        <ul>
          <li>Chuyên ngành: {specialize}</li>
          <li>
            Niên khóa: {startDate.year} - {endDate.year}
          </li>
        </ul>
      </div>
    </div>
  );
};

const Education = () => {
  const { education } = useSelector((state) => state.resume);
  console.log(education);

  return (
    <>
      {education?.[0].school !== "" && (
        <EducationContainer>
          <div className="education">
            <div className="title">
              <span>Học vấn</span>
            </div>

            {education?.map(
              (
                {
                  school,
                  city,
                  startDate,
                  endDate,
                  specialize,
                  descriptionHtml,
                },
                idx
              ) => {
                return (
                  <EducationItem
                    idx={idx}
                    school={school}
                    startDate={startDate}
                    endDate={endDate}
                    city={city}
                    specialize={specialize}
                    descriptionHtml={descriptionHtml}
                    key={idx}
                  />
                );
              }
            )}
          </div>
        </EducationContainer>
      )}
    </>
  );
};

export default Education;

const EducationContainer = styled.div`
  width: 100%;
  color: #ffffff;

  .education {
    width: 100%;
    .title {
      background: #453a98;
      font-size: 40px;
      text-transform: uppercase;
      font-weight: 500;

      span {
        margin-left: 2px;
      }
    }

    h4 {
      min-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
      margin: 0px;
      font-size: 22px;
      font-family: Cambria, Georgia, serif;
      font-weight: 600;
    }
    .city {
      color: #ffffff;
      font-size: 23px;
      line-height: 22px;
    }
    .city,
    .school {
      letter-spacing: 0.5px;
    }

    p {
      margin: 0;
    }

    .education-content {
      .education-content-item {
        ul,
        ol,
        p {
          margin: 0;
          padding-left: 20px;
          list-style: none;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-word;
          li {
            font-size: 20px;
          }
        }
      }

      ol,
      ul,
      p {
        word-break: break-word;
        margin: 0;
      }
    }
  }
`;
