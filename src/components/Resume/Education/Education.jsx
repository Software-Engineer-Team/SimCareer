import React, { useState } from "react";
import {
  Button,
  Input,
  Portal,
  SelectOptions,
  SubmitImage,
} from "@components/index";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";

import { MdPhotoCamera, MdEdit } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import { EducationContainer } from "./Education.styled";
import Draft from "../Draft/Draft";

const Education = () => {
  const months = [""];
  const [showEducationContent, setShowEducationContent] = useState(false);
  const toggleEducationContentHandler = () => {
    setShowEducationContent(!showEducationContent);
  };
  return (
    <EducationContainer>
      <div className="personal-detail">
        <div className="personal-detail-header">
          <div className="header-title">Kinh nghiệm</div>
          <div className="header-btn">
            <Button onClick={toggleEducationContentHandler}>
              {showEducationContent ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </Button>
          </div>
        </div>
        <div className="education-items">
          <div className="education-item-container">
            <div className="education-item-content">
              <div className="education-item-title">
                <div className="education-title-container">[Education]</div>
              </div>
              <div className="education-btn">
                <div className="education-btn-container">
                  <MdEdit />
                </div>
              </div>
            </div>

            <div className="education-item-detail">
              <div className="education-item-intro">
                <Input
                  type="text"
                  label="Chức vụ"
                  handler={() => {}}
                  value={() => {}}
                  error={() => {}}
                  width={"100%"}
                  widthContainer={"100%"}
                />
                <Input
                  type="text"
                  label="Nhà tuyển dụng"
                  handler={() => {}}
                  value={() => {}}
                  error={() => {}}
                  width={"90%"}
                  widthContainer={"50%"}
                />
                <Input
                  type="text"
                  label="Tiêu đề"
                  handler={() => {}}
                  value={() => {}}
                  error={() => {}}
                  width={"100%"}
                  widthContainer={"50%"}
                />
              </div>
              <div className="education-date">
                <SelectOptions
                  formType={"Ngày bắt đầu"}
                  width={"145px"}
                  widthContainer={"50%"}
                />
                <SelectOptions
                  formType={"Ngày kết thúc"}
                  width={"160px"}
                  widthContainer={"50%"}
                />
              </div>
              <div className="description">
                <div className="form-type">
                  <label>Mô tả</label>
                </div>
                <Draft />
              </div>
            </div>
          </div>

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
      </div>
    </EducationContainer>
  );
};

export default Education;
