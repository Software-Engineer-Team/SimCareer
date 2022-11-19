import React, { useRef, useState } from "react";
import { IoClose, IoImageOutline } from "react-icons/io5";
import { Fade } from "react-reveal";
import { SubmitImageContainer } from "./SubmitImage.styled";
import { Button } from "@components/index";

const SubmitImage = ({ closeImageFormHandler, uploadImageHandler }) => {
  const imgRef = useRef(null);
  return (
    <SubmitImageContainer>
      <div className="back-drop"></div>
      <Fade bottom>
        <div className="submit-form">
          <div className="submit-form-content">
            <div className="submit-form-head">
              <h3>Photo</h3>
              <div className="btn-container">
                <Button onClick={closeImageFormHandler}>
                  <IoClose />
                </Button>
              </div>
            </div>

            <label htmlFor="images" onChange={() => uploadImageHandler(imgRef)}>
              <div className="submit-form-middle">
                <div className="icon">
                  <IoImageOutline />
                </div>
                <div className="file-name">
                  Drag & drop a file here or click to upload.
                </div>
                <input
                  type="file"
                  style={{ display: "none" }}
                  id="images"
                  accept="image/*"
                  ref={imgRef}
                />
              </div>
            </label>
          </div>
        </div>
      </Fade>
    </SubmitImageContainer>
  );
};

export default SubmitImage;
