import React, { useState } from "react";
import { Button, Draft } from "@components/index";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Container } from "./DescriptionSection.styled";
import { FaTrashAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { resumeActions } from "~/store/resume-slice";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

const DescriptionSection = ({ headerTitle, type }) => {
  const dispatch = useDispatch();
  const [showContent, setShowContent] = useState(false);
  const toggleContentHandler = () => {
    setShowContent(!showContent);
  };

  const deleteEntryHandler = (type) => {
    switch (type) {
      case "Summary": {
        dispatch(resumeActions.deleteSummary());
        break;
      }
      default:
        break;
    }
    toggleContentHandler();
  };

  return (
    <Container>
      <div className="personal-detail">
        <div className="personal-detail-header">
          <div className="header-title">{headerTitle}</div>
          <div className="header-btn">
            <Button style={{ marginRight: "10px" }}>
              <MdOutlineTipsAndUpdates />
            </Button>
            <Button onClick={toggleContentHandler}>
              {showContent ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </Button>
          </div>
        </div>

        {showContent && (
          <div className="item-container">
            <div className="description">
              <div className="form-type">
                <label>Mô tả</label>
              </div>
              <Draft type={type} isEntriesSection={false} />
            </div>
            <div className="btns">
              <Button
                onClick={() => {
                  deleteEntryHandler(type);
                }}
              >
                <FaTrashAlt />
              </Button>
              <div className="btn-done" onClick={toggleContentHandler}>
                <TiTick />
                <span>Done</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default DescriptionSection;
