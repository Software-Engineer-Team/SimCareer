import React from "react";
import styled from "styled-components";

import { IoImageOutline } from "react-icons/io5";
import { GrRotateRight } from "react-icons/gr";

const ImageCropDialogControls = ({
  onZoomChange,
  zoom,
  newImgHandler,
  rotateHandler,
}) => {
  return (
    <ControlsContainer className="controls">
      <div className="select-another-img">
        <div className="select-another-img-content">
          <label>New</label>
        </div>
        <button type="button" onClick={newImgHandler}>
          <IoImageOutline />
        </button>
      </div>
      <div className="rotate-img">
        <div className="rotate-img-content">
          <label>Rotate</label>
        </div>
        <button type="button" onClick={rotateHandler}>
          <GrRotateRight />
        </button>
      </div>
      <div className="zoom-img">
        <div className="zoom-img-content">
          <label>Zoom</label>
        </div>
        <input
          id="480ad2da-6104-4e9c-ac42-f477186ac910"
          type="range"
          size="1"
          min="1"
          max="3"
          step="0.1"
          onChange={(e) => {
            onZoomChange(e.target.value);
          }}
          value={zoom}
        />
      </div>
    </ControlsContainer>
  );
};

export default ImageCropDialogControls;

const ControlsContainer = styled.div`
  &.controls {
    padding-top: 0.75rem;
    display: flex;
    align-items: flex-start;
    margin: -0.5rem;
    position: relative;

    .zoom-img {
      width: 100%;
    }

    .select-another-img,
    .rotate-img,
    .zoom-img {
      padding: 0.5rem;
      display: flex;
      align-items: center;
      flex-direction: column;

      .select-another-img-content,
      .rotate-img-content,
      .zoom-img-content {
        display: flex;
        align-items: center;
        margin-bottom: 0.25rem;
        label {
          --tw-text-opacity: 1;
          color: rgb(82 82 90 / var(--tw-text-opacity));
          font-size: 0.875rem;
          line-height: 1.25rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 500;
          width: 100%;
        }
      }

      --color-brand-200: #b69df4;
      --color-brand-500: #4314b6;

      input[type="range"] {
        height: 22px;
        -webkit-appearance: none;
        margin: 10px 0;
        width: 100%;
        border: none;
        padding-bottom: 0.75rem;
        padding-top: 0.75rem;
        cursor: pointer;
        outline: none;
      }

      input[type="range"]:focus {
        outline: none;
      }

      input[type="range"]::-webkit-slider-runnable-track {
        width: 100%;
        height: 6px;
        cursor: pointer;
        box-shadow: 0px 0px 0px #000000;
        background: #e4e4e7;
        border-radius: 3px;
        border: 0px solid #000000;
      }
      input[type="range"]::-webkit-slider-thumb {
        box-shadow: 0px 0px 0px #000000;
        border: 2px solid var(--color-brand-500);
        height: 18px;
        width: 18px;
        border-radius: 25px;
        background: var(--color-brand-500);
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -6px;
      }
      input[type="range"]:focus::-webkit-slider-runnable-track {
        background: #e4e4e7;
      }
      input[type="range"]::-moz-range-track {
        width: 100%;
        height: 6px;
        cursor: pointer;
        box-shadow: 0px 0px 0px #000000;
        background: #e4e4e7;
        border-radius: 3px;
        border: 0px solid #000000;
      }

      input[type="range"]::-moz-range-thumb {
        box-shadow: 0px 0px 0px #000000;
        border: 2px solid var(--color-brand-500);
        height: 14px;
        width: 14px;
        border-radius: 25px;
        background: var(--color-brand-500);
        cursor: pointer;
      }

      input[type="range"]:focus-visible::-webkit-slider-thumb {
        box-shadow: 0px 0px 0px 0.4rem var(--color-brand-200);
      }
      input[type="range"]:focus-visible::-moz-range-thumb {
        box-shadow: 0px 0px 0px 0.4rem var(--color-brand-200);
      }

      button {
        outline: none;
        --tw-text-opacity: 1;
        color: rgb(63 63 69 / var(--tw-text-opacity));
        font-size: 1rem;
        line-height: 1.5rem;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
        border: 1px solid #0000;
        border-radius: 5px;
        overflow: hidden;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        justify-content: center;
        position: relative;

        &:hover {
          background: #f9f6fe;
          border-color: #7f52ec;
        }

        svg {
          padding-left: 0.125rem;
          padding-right: 0.125rem;
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;
