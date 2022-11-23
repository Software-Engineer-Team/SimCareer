import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { ImageCropDialogContainer } from "./ImageCropDialog.styled";

const ImageCropDialog = ({
  imageUrl,
  cropInit,
  zoomInit,
  objectFit,
  rotationInit,
  aspectInit,
  onZoomChange,
  onCropComplete,
}) => {
  const [crop, setCrop] = useState(cropInit || { x: 0, y: 0 });
  const [aspect] = useState(aspectInit || { value: 6 / 8 });

  return (
    <ImageCropDialogContainer>
      <Cropper
        image={imageUrl}
        zoom={zoomInit || 1}
        crop={crop}
        aspect={aspect.value}
        objectFit={objectFit}
        rotation={rotationInit || 0}
        onCropChange={setCrop}
        onZoomChange={onZoomChange}
        onCropComplete={onCropComplete}
      />
    </ImageCropDialogContainer>
  );
};

export default ImageCropDialog;
