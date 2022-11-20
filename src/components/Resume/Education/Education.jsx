import React, { useState } from "react";
import { Button } from "@components/index";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { BiPlus } from "react-icons/bi";
import { EducationContainer } from "./Education.styled";
import EducationItem from "./EducationItem/EducationItem";

const Education = () => {
  const [showEducationContent, setShowEducationContent] = useState(false);
  const toggleEducationContentHandler = () => {
    setShowEducationContent(!showEducationContent);
  };
  return (
    <EducationContainer>
      <div className="personal-detail">
        <div className="personal-detail-header">
          <div className="header-title">Học vấn</div>
          <div className="header-btn">
            <Button onClick={toggleEducationContentHandler}>
              {showEducationContent ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </Button>
          </div>
        </div>

        {showEducationContent && (
          <div className="education-items">
            <EducationItem />
            <EducationItem />

            <div className="add-btn">
              <div className="btn-icon-container">
                <div className="btn-icon-content">
                  <span className="btn-icon">
                    <BiPlus />
                  </span>
                  <span className="btn-text">Add education</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </EducationContainer>
  );
};

export default Education;
