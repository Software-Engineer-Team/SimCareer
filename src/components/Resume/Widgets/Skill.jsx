import React from "react";
import styled from "styled-components";

const Skill = () => {
  return (
    <SkillContainer>
      <div className="skill">
        <div className="title">
          <span>Kỹ năng</span>
        </div>
        <div className="skill-content">
          <h4>Ngoài ra</h4>
          <div>
            {Array(2)
              .fill(null)
              .map(() => {
                return (
                  <div className="skill-content-item">
                    <h4>Thực tập sinh bán hàng | 12/2020 - 2/2021</h4>
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
    </SkillContainer>
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
      margin-top: 20px;
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
        h4 {
          margin-top: 0;
          font-size: 22px;
          text-transform: none;
        }
        ul {
          margin: 0;
        }
      }
    }
  }
`;
