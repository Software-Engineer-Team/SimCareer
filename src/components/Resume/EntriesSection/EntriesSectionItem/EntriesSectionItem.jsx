import { FiMoreVertical } from "react-icons/fi";
import { MdPhotoCamera, MdEdit } from "react-icons/md";
import Draft from "../../Draft/Draft";
import { FaTrashAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Input, Button, SelectOptions } from "@components/index";
import { useState } from "react";
import { EntriesSectionItemContainer } from "./EntriesSectionItem.styled";
import { useDispatch } from "react-redux";
const EntriesSectionItem = ({ title, type }) => {
  const [showDetail, setShowDetail] = useState(false);
  const toggleDetailHandler = () => {
    setShowDetail(!showDetail);
  };
  const dispatch = useDispatch();
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
                label={
                  type === "Experience"
                    ? "Công ty"
                    : type === "Education"
                    ? "Trường học"
                    : type === "Skill"
                    ? "Tên kỹ năng"
                    : type === "Hobby"
                    ? "Tên sở thích"
                    : type === "Certificate"
                    ? "Chứng chỉ"
                    : "Tiêu đề"
                }
                handler={() => {}}
                value={() => {}}
                error={() => {}}
                width={"100%"}
                widthContainer={"100%"}
              />
              {type &&
                type !== "Skill" &&
                type !== "Hobby" &&
                type !== "Certificate" && (
                  <Input
                    type="text"
                    label={
                      type === "Experience" || type === "Education"
                        ? title
                        : "Tóm tắt"
                    }
                    handler={() => {}}
                    value={() => {}}
                    error={() => {}}
                    width={type ? "90%" : "100%"}
                    widthContainer={type ? "50%" : "100%"}
                  />
                )}
              {type &&
                type !== "Skill" &&
                type !== "Hobby" &&
                type !== "Certificate" && (
                  <Input
                    type="text"
                    label={
                      type === "Experience" || type === "Education"
                        ? "Thành phố"
                        : "Tóm tắt"
                    }
                    handler={() => {}}
                    value={() => {}}
                    error={() => {}}
                    width={"100%"}
                    widthContainer={"50%"}
                  />
                )}
            </div>
            {type && type !== "Skill" && type !== "Hobby" && (
              <div className="date">
                {type === "Certificate" ? (
                  <SelectOptions
                    formType={"Giai đoạn"}
                    width={"325px"}
                    widthContainer={"100%"}
                  />
                ) : (
                  <>
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
                  </>
                )}
              </div>
            )}
            <div className="description">
              <div className="form-type">
                <label>Mô tả</label>
              </div>
              <Draft type={type} />
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
