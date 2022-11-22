import React from "react";
import styled from "styled-components";

const ImagesPreview = ({ url, fileName, isRight }) => {
  return (
    <FormImg isRight={isRight} href={url}>
      <div className="column">
        <div className="lightgallery_item">
          {/* <img src={url} hidden alt={fileName} /> */}
          {fileName}
        </div>
      </div>
    </FormImg>
  );
};

export default ImagesPreview;

const FormImg = styled.a`
  display: block;
  max-height: 103px;
  max-width: 200px;
  color: blue !important;
  font-size: 20px !important;
  div.column {
    /* padding: 5px; */
    .lightgallery_item {
      cursor: pointer;
      width: 100%;
      img {
        max-width: 90px;
        max-height: 90px;
        min-height: 90px;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
