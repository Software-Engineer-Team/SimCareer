import React, { useRef, useState } from "react";
import { IoClose, IoImageOutline } from "react-icons/io5";
import { Fade } from "react-reveal";
import { SubmitImageContainer } from "./SubmitImage.styled";
import { Button } from "@components/index";
import ImageCropDialog from "./ImageCropDialog";
import ImageCropDialogControls from "./ImageCropDialogControls";
import getCroppedImg from "@utils/crop-image";
import { useDispatch, useSelector } from "react-redux";
import { resumeActions } from "~/store/resume-slice";

const SubmitImage = ({ closeImageFormHandler, uploadImageHandler }) => {
  const imgRef = useRef(null);
  const { personalDetail } = useSelector((state) => state.resume);
  const dispatch = useDispatch();
  const [zoom, setZoom] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = (_croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const onZoomChange = (zoomVal) => {
    setZoom(zoomVal);
  };

  const rotateHandler = () => {
    setRotation(rotation + 90);
  };

  const confirmHandler = async () => {
    const croppedImageUrl = await getCroppedImg(
      personalDetail?.image,
      croppedAreaPixels
    );

    dispatch(resumeActions.setPersonalDetailImage({ image: croppedImageUrl }));
    closeImageFormHandler();
  };

  const newImgHandler = () => {
    dispatch(resumeActions.setPersonalDetailImage({ image: "" }));
  };

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

            {!personalDetail?.image ? (
              <label
                htmlFor="images"
                onChange={() => uploadImageHandler(imgRef)}
              >
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
            ) : (
              <>
                <ImageCropDialog
                  imageUrl={personalDetail?.image && personalDetail.image}
                  zoomInit={zoom}
                  rotationInit={rotation}
                  onZoomChange={onZoomChange}
                  onCropComplete={onCropComplete}
                />
                <ImageCropDialogControls
                  onZoomChange={onZoomChange}
                  zoom={zoom}
                  newImgHandler={newImgHandler}
                  rotateHandler={rotateHandler}
                />

                <div className="btn-confirm">
                  <div className="btn-confirm-content">
                    <button type="button" onClick={confirmHandler}>
                      <div>Confirm</div>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Fade>
    </SubmitImageContainer>
  );
};

export default SubmitImage;
