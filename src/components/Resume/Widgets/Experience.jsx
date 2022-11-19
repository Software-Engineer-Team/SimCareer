import React from "react";
import styled from "styled-components";

const Experience = () => {
  return (
    <ExperienceContainer>
      <div className="company">
        <div className="title">
          <span>Kinh nghiệm</span>
        </div>
        <h4>
          Ngoài ra mỗi bản mỗi CV cần được cá nhân hóa cho từng công tyssssssss
        </h4>
        <p className="time">12/2020 - 5/2021</p>
        <div className="company-content">
          {Array(3)
            .fill(null)
            .map(() => {
              return (
                <div className="company-content-item">
                  <h4>Thực tập sinh bán hàng | 12/2020 - 2/2021</h4>
                  <ul>
                    <li>
                      Thông tin cá nhân: Ứng viên cần cập nhật DOB trong hồ sơ
                      ứng tuyển của mình
                    </li>
                    <li>
                      Thông tin cá nhân: Ứng viên cần cập nhật DOB trong hồ sơ
                      ứng tuyển của mình
                    </li>
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </ExperienceContainer>
  );
};

export default Experience;

const ExperienceContainer = styled.div`
  width: 100%;
  .company {
    width: 100%;
    .title {
      background: #453a98;
      color: #ffffff;
      padding: 2px 10px 2px 5px;
      font-size: 40px;
      text-transform: uppercase;
      font-weight: 500;

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
      margin-top: 20px;
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
        ul {
          margin: 0;
        }
      }
    }
  }
`;
