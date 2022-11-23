import React, { useRef, useState } from "react";
import { IoClose, IoImageOutline } from "react-icons/io5";
import { Fade } from "react-reveal";
import { CustomSubmitImgContainer } from "./CustomSubmitImg.styled";
import { Button } from "@components/index";
import ImageCropDialog from "./ImageCropDialog";
import ImageCropDialogControls from "./ImageCropDialogControls";
import getCroppedImg from "@utils/crop-image";
import useBackDrop from "@hooks/useBackDrop";
import { uploadImageHandler } from "@utils/utils";

const CustomSubmitImg = ({
  idx,
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

    setImage(croppedImageUrl, image.name, idx);
    closeImageFormHandler();
  };

  const newImgHandler = () => {
    setImage(null, "", idx);
  };

  useBackDrop("root-portal");
  console.log(!image?.url);

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

            <label
              htmlFor="images"
              onChange={() => {
                uploadImageHandler(imgRef, setImage, idx);
                closeImageFormHandler();
              }}
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
          </div>
        </div>
      </Fade>
    </CustomSubmitImgContainer>
  );
};

export default CustomSubmitImg;
