import React, { useState } from "react";
import { Button } from "@components/index";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Container } from "./EntriesSection.styled";

import { BiPlus } from "react-icons/bi";
import EntriesSectionItem from "./EntriesSectionItem/EntriesSectionItem";

const EntriesSection = ({ headerTitle, btnText }) => {
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
          <div className="items">
            <EntriesSectionItem />
            <EntriesSectionItem />

            <div className="add-btn">
              <div className="btn-icon-container">
                <div className="btn-icon-content">
                  <span className="btn-icon">
                    <BiPlus />
                  </span>
                  <span className="btn-text">Add {btnText}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default EntriesSection;
