import React, { useState } from "react";
import { Button, Draft } from "@components/index";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Container } from "./DescriptionSection.styled";

const DescriptionSection = ({ headerTitle }) => {
  const [showContent, setShowContent] = useState(false);
  const toggleContentHandler = () => {
    setShowContent(!showContent);
  };
  return (
    <Container>
      <div className="personal-detail">
        <div className="personal-detail-header">
          <div className="header-title">{headerTitle}</div>
          <div className="header-btn">
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
              <Draft />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default DescriptionSection;
