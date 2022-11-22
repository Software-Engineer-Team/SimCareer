import React, { useRef, useState } from "react";
import { IoClose, IoImageOutline } from "react-icons/io5";
import { Fade } from "react-reveal";
import { CustomSubmitImgContainer } from "./CustomSubmitImg.styled";
import { Button } from "@components/index";
import ImageCropDialog from "./ImageCropDialog";
import ImageCropDialogControls from "./ImageCropDialogControls";
import getCroppedImg from "@utils/crop-image";
import { useDispatch } from "react-redux";
import useBackDrop from "@hooks/useBackDrop";
import { uploadImageHandler } from "@utils/utils";

const CustomSubmitImg = ({
  closeImageFormHandler,
  image,
  setImage,
  aspectInit,
}) => {
  const imgRef = useRef(null);
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
    const croppedImageUrl = await getCroppedImg(image.url, croppedAreaPixels);

    setImage(croppedImageUrl, image.name);
    closeImageFormHandler();
  };

  const newImgHandler = () => {
    setImage(null, "");
  };

  useBackDrop("root-portal");

  return (
    <CustomSubmitImgContainer id="custom-submit-image">
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

            {!image?.url ? (
              <label
                htmlFor="images"
                onChange={() => uploadImageHandler(imgRef, setImage)}
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
                  imageUrl={image?.url && image.url}
                  zoomInit={zoom}
                  rotationInit={rotation}
                  onZoomChange={onZoomChange}
                  onCropComplete={onCropComplete}
                  aspectInit={aspectInit}
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
    </CustomSubmitImgContainer>
  );
};

export default CustomSubmitImg;
