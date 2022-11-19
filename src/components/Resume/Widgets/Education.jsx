import React from "react";
import styled from "styled-components";

const Education = () => {
  return (
    <EducationContainer>
      <div className="education">
        <div className="title">
          <span>Học vấn</span>
        </div>

        <div className="education-content">
          <h4>Thông tin cá nhân: Ứng viên cần cập nhật DOB trong hồ sơ ứng</h4>
          <div>
            {Array(2)
              .fill(null)
              .map(() => {
                return (
                  <div className="education-content-item">
                    <ul>
                      <li>
                        Thông tin cá nhân: Ứng viên cần cập nhật DOB trong hồ sơ
                      </li>
                      <li>
                        Thông tin cá nhân: Ứng viên cần cập nhật DOB trong hồ sơ
                      </li>
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </EducationContainer>
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

    p {
      margin: 0;
    }

    .education-content {
      .education-content-item {
        ul {
          margin: 0;
          padding-left: 20px;
          list-style: none;
          li {
            font-size: 20px;
          }
        }
      }
    }
  }
`;
