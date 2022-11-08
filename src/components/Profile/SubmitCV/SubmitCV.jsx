import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Fade } from "react-reveal";
import { SubmitCvContainer } from "./SubmitCV.styled";
import dayjs from "dayjs";
import { generateRandomId } from "~/utils/utils";

const SubmitCV = ({ onShowFormSubmitCV, onSetFiles, currentFile }) => {
  const [fileName] = useState("Drag and drop a file here, or click to select");

  const submitCV = (e) => {
    if (e.target.files[0]) {
      const fReader = new FileReader();
      fReader.readAsDataURL(e.target.files[0]);
      fReader.onload = (event) => {
        onSetFiles((preFiles) => [
          ...preFiles,
          {
            postTitle: e.target.files[0].name,
            time: dayjs(Date.now()).format("DD/MM/YYYY"),
            id: generateRandomId(),
            status: "Chưa xem xét",
            url: event.target.result,
          },
        ]);
      };
      return onShowFormSubmitCV(false);
    }
  };

  return (
    <SubmitCvContainer>
      <div className="back-drop"></div>
      <Fade bottom>
        <div className="submit-form">
          <div className="submit-form-content">
            <div className="submit-form-head">
              <h3>Nộp CV của bạn tại đây</h3>
              <div className="btn-container">
                <button className="btn" type="button">
                  <IoClose onClick={() => onShowFormSubmitCV(false)} />
                </button>
              </div>
            </div>

            <p>Vui lòng đăng tải CV gần dây nhất của bạn dưới dạng pdf</p>

            <label htmlFor="submit-cv">
              <div className="submit-form-middle">
                <div className="file-name">{fileName}</div>
                <input
                  id="submit-cv"
                  type="file"
                  name="upload"
                  accept="application/pdf,application/vnd.ms-excel"
                  style={{ display: "none" }}
                  onChange={submitCV}
                />
              </div>
            </label>

            <div className="submit-form-footer">
              <div className="menu-logo">
                <img src="/images/simcareer-not-label.png" alt="Logo" />
                <div>SIRI</div>
              </div>
              <div className="file-name">
                Tệp gần đây: {currentFile ? currentFile : "not found"}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </SubmitCvContainer>
  );
};

export default SubmitCV;
