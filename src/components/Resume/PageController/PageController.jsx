import React from "react";
import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import { FiDownload, FiHelpCircle } from "react-icons/fi";
import { IoLinkOutline, IoReturnDownBack } from "react-icons/io5";
import { MdCenterFocusStrong, MdLocalPrintshop } from "react-icons/md";
import styled from "styled-components";

const PageController = (props) => {
  return (
    <PageControllerContainer id="pageController">
      <div className="controller-content">
        {!props.closeResumeRight && (
          <div
            className="controller-content-item"
            onClick={props.toggleCloseResumeRight}
          >
            <IoReturnDownBack />
          </div>
        )}

        <div className="controller-content-item" onClick={props.zoomInHandler}>
          <BsZoomIn />
        </div>
        <div className="controller-content-item" onClick={props.zoomOutHandler}>
          <BsZoomOut />
        </div>
        <div className="controller-content-item" onClick={props.focusStrong}>
          <MdCenterFocusStrong />
        </div>
        <div className="text-br">|</div>
        <div className="controller-content-item" onClick={props.handlePrint}>
          <MdLocalPrintshop />
        </div>
        <div className="controller-content-item" onClick={props.printDocument}>
          <FiDownload />
        </div>
        <div className="text-br">|</div>
        {!props.closeResumeRight && (
          <div className="controller-content-item">
            <IoLinkOutline />
          </div>
        )}
        <a
          className="controller-content-item"
          href="https://simcareer.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiHelpCircle />
        </a>
      </div>
    </PageControllerContainer>
  );
};

export default PageController;

const PageControllerContainer = styled.div`
  bottom: 100px;
  transition: all 0.15s ease-in-out;
  position: absolute;
  /* z-index: 20; */

  .controller-content {
    box-shadow: 0 4px 16px rgb(0 0 0 / 20%);
    padding-left: 2rem;
    padding-right: 2rem;
    line-height: 1;
    font-size: 1.5rem;
    border-width: 1px;
    border-radius: 9999px;
    border-color: rgba(237, 242, 247, 1);
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

    .text-br {
      color: rgba(203, 213, 224, 1);
      padding: 0.75rem;
    }

    .controller-content-item {
      transition: all 0.1s ease-in-out;
      &:hover {
        background-color: #edf2f7;
        opacity: 1;
      }
      opacity: 0.75;
      color: #000000;
      padding: 0.75rem;
      cursor: pointer;
      display: flex;
    }
  }
`;
