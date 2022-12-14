import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useImportWidget from "@hooks/useImportWidget";
import { Gallery, ImagesPreview, PdfDisplay, Portal } from "@components/index";

const CertificateItem = ({ name, date, descriptionHtml, image, file, idx }) => {
  useImportWidget({ html: descriptionHtml, elId: "CERTIFICATE_" + idx });

  const toggleShowFile = () => {
    setShowFile(!showFile);
  };
  const [showFile, setShowFile] = useState(false);
  return (
    <>
      <div className="certificate-content">
        {!image?.url ? (
          <h4>
            {name && name.concat(" - ")}
            {name && <span>{date.month + "/" + date.year}</span>}
          </h4>
        ) : (
          <Gallery>
            <ImagesPreview
              url={image?.url}
              fileName={name.concat(" - ") + date.month + "/" + date.year}
              style={{ color: "white" }}
            />
          </Gallery>
        )}
        <div>
          <div
            className="certificate-content-item"
            id={"CERTIFICATE_" + idx}
          ></div>
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
        </div>
      </div>

      {showFile && (
        <Portal>
          <PdfDisplay cb={toggleShowFile} url={file?.url} />
        </Portal>
      )}
    </>
  );
};

const Certificate = () => {
  const { certificate } = useSelector((state) => state.resume);
  return (
    <>
      {certificate?.[0].descriptionHtml && (
        <CertificateContainer>
          <div className="certificate">
            <div className="title">
              <span>Chứng chỉ</span>
            </div>
            {certificate.map(
              ({ name, date, file, image, descriptionHtml }, idx) => {
                return (
                  <CertificateItem
                    name={name}
                    date={date}
                    file={file}
                    image={image}
                    descriptionHtml={descriptionHtml}
                    key={idx}
                    idx={idx}
                  />
                );
              }
            )}
          </div>
        </CertificateContainer>
      )}
    </>
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
      font-size: 25px;
      font-weight: 500;
    }

    p {
      margin: 0;
    }

    .certificate-content {
      margin-left: 6px;
      h4 {
        span {
          font-weight: 400;
        }
      }
      .certificate-content-item {
        ul,
        ol,
        p {
          margin: 0;
          margin-left: 20px;
          word-break: break-word;

          li {
            font-size: 20px;
          }
        }
      }
    }
  }
`;
