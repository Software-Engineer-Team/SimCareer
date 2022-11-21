import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { ImageCropDialogContainer } from "./ImageCropDialog.styled";

const aspectRatios = [
  { value: 4 / 3, text: "4/3" },
  { value: 16 / 9, text: "16/9" },
  { value: 1 / 2, text: "1/2" },
];

const ImageCropDialog = ({
  imageUrl,
  cropInit,
  zoomInit,
  rotationInit,
  aspectInit,
  onZoomChange,
  onCropComplete,
}) => {
  const [crop, setCrop] = useState(cropInit || { x: 0, y: 0 });
  const [aspect] = useState(aspectInit || aspectRatios[0]);

  return (
    <ImageCropDialogContainer>
      <Cropper
        image={imageUrl}
        zoom={zoomInit || 1}
        crop={crop}
        aspect={aspect.value}
        rotation={rotationInit || 0}
        onCropChange={setCrop}
        onZoomChange={onZoomChange}
        onCropComplete={onCropComplete}
      />
    </ImageCropDialogContainer>
  );
};

export default ImageCropDialog;
