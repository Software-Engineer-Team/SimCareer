import React from "react";
import styled from "styled-components";

const Certificate = () => {
  return (
    <CertificateContainer>
      <div className="certificate">
        <div className="title">
          <span>Chứng chỉ</span>
        </div>

        <div className="certificate-content">
          <h4>Ngoại ngữ</h4>
          <div>
            <div className="certificate-content-item">
              <ul>
                <li>Ielts: 6.5</li>
                <li>HSK: 2</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="certificate-content">
          <h4>Tin học</h4>
          <div>
            <div className="certificate-content-item">
              <ul>
                <li>IC3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CertificateContainer>
  );
};

export default Certificate;

const CertificateContainer = styled.div`
  width: 100%;
  color: #ffffff;
  margin-top: 20px;

  .certificate {
    width: 100%;
    .title {
      background: #453a98;
      font-size: 40px;
      text-transform: uppercase;
      font-weight: 500;

      span {
        margin-left: 0px;
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

    .certificate-content {
      margin-left: 6px;
      .certificate-content-item {
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
