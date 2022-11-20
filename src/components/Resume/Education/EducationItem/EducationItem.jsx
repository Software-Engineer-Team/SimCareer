import { EducationItemContainer } from "./EducationItem.styled";
import { FiMoreVertical } from "react-icons/fi";
import { MdPhotoCamera, MdEdit } from "react-icons/md";
import Draft from "../../Draft/Draft";
import { FaTrashAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Input } from "@components/index";
import { Button, SelectOptions } from "~/components";
import { useState } from "react";
const EducationItem = () => {
  const [showEducationDetail, setShowEducationDetail] = useState(false);
  const toggleEductationDetailHandler = () => {
    setShowEducationDetail(!showEducationDetail);
  };
  return (
    <EducationItemContainer>
      <div className="education-item-container">
        {!showEducationDetail ? (
          <div
            className="education-item-content"
            onClick={toggleEductationDetailHandler}
          >
            <div className="education-item-title">
              <div className="education-title-container">[Học vấn]</div>
            </div>
            <div className="education-btn">
              <Button>
                <MdEdit />
              </Button>
            </div>
          </div>
        ) : (
          <div className="education-item-detail">
            <div className="education-item-intro">
              <Input
                type="text"
                label="Học vấn"
                handler={() => {}}
                value={() => {}}
                error={() => {}}
                width={"100%"}
                widthContainer={"100%"}
              />
              <Input
                type="text"
                label="Trường học"
                handler={() => {}}
                value={() => {}}
                error={() => {}}
                width={"90%"}
                widthContainer={"50%"}
              />
              <Input
                type="text"
                label="Thành phố"
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
            <div className="btns">
              <Button>
                <FaTrashAlt />
              </Button>
              <div className="btn-done" onClick={toggleEductationDetailHandler}>
                <TiTick />
                <span>Done</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </EducationItemContainer>
  );
};

export default EducationItem;
