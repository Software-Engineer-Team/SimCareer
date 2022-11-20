import { FiMoreVertical } from "react-icons/fi";
import { MdPhotoCamera, MdEdit } from "react-icons/md";
import Draft from "../../Draft/Draft";
import { FaTrashAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Input, Button, SelectOptions } from "@components/index";
import { useState } from "react";
import { EntriesSectionItemContainer } from "./EntriesSectionItem.styled";
const EntriesSectionItem = ({
  inputLabel1,
  inputLabel2,
  inputLabel3,
  title,
}) => {
  const [showDetail, setShowDetail] = useState(false);
  const toggleDetailHandler = () => {
    setShowDetail(!showDetail);
  };
  return (
    <EntriesSectionItemContainer>
      <div className="item-container">
        {!showDetail ? (
          <div className="item-content" onClick={toggleDetailHandler}>
            <div className="item-title">
              <div className="title-container">{title}</div>
            </div>
            <div className="btn">
              <Button>
                <MdEdit />
              </Button>
            </div>
          </div>
        ) : (
          <div className="item-detail">
            <div className="item-intro">
              <Input
                type="text"
                label={inputLabel1 ? inputLabel1 : "Tiêu đề"}
                handler={() => {}}
                value={() => {}}
                error={() => {}}
                width={"100%"}
                widthContainer={"100%"}
              />
              <Input
                type="text"
                label={inputLabel2 ? inputLabel2 : "Tóm tắt"}
                handler={() => {}}
                value={() => {}}
                error={() => {}}
                width={"90%"}
                widthContainer={"50%"}
              />
              <Input
                type="text"
                label={inputLabel3 ? inputLabel3 : "Tóm tắt"}
                handler={() => {}}
                value={() => {}}
                error={() => {}}
                width={"100%"}
                widthContainer={"50%"}
              />
            </div>
            <div className="date">
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
              <div className="btn-done" onClick={toggleDetailHandler}>
                <TiTick />
                <span>Done</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </EntriesSectionItemContainer>
  );
};

export default EntriesSectionItem;
