import { FiMoreVertical } from "react-icons/fi";
import { MdPhotoCamera, MdEdit } from "react-icons/md";
import Draft from "../../Draft/Draft";
import { FaTrashAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Input, Button, SelectOptions } from "@components/index";
import { useState } from "react";
import { EntriesSectionItemContainer } from "./EntriesSectionItem.styled";
import { useDispatch, useSelector } from "react-redux";
import { resumeActions } from "~/store/resume-slice";
const EntriesSectionItem = ({ title, type, idx }) => {
  const [showDetail, setShowDetail] = useState(false);
  const toggleDetailHandler = () => {
    setShowDetail(!showDetail);
  };
  const resumeState = useSelector((state) => state.resume);
  console.log(resumeState);
  const dispatch = useDispatch();
  console.log(type);

  const input1Handler = (type, value = "", idx = 0) => {
    switch (type) {
      case "Education": {
        return {
          label: "Trường học",
          handler: () => {
            dispatch(
              resumeActions.setEducationSchool({ index: idx, school: value })
            );
          },
        };
      }
      case "Experience": {
        return {
          label: "Công ty",
          handler: () => {
            dispatch(
              resumeActions.setExperienceCompany({ index: idx, company: value })
            );
          },
        };
      }
      case "Skill": {
        return {
          label: "Tên kỹ năng",
          handler: () => {
            dispatch(resumeActions.setSkillName({ index: idx, name: value }));
          },
        };
      }
      case "Certificate": {
        return {
          label: "Chứng chỉ",
          handler: () => {
            dispatch(
              resumeActions.setCertificateName({ index: idx, name: value })
            );
          },
        };
      }
      case "Hobby": {
        return {
          label: "Tên sở thích",
          handler: () => {
            dispatch(resumeActions.setHobbyName({ index: idx, name: value }));
          },
        };
      }
      default:
        return {
          label: "Tiêu đề",
          handler: () => {},
        };
    }
  };

  const input2Handler = (type, title = "", value = "", idx = 0) => {
    console.log(title);
    switch (type) {
      case "Education": {
        return {
          label: title,
          handler: () => {
            dispatch(
              resumeActions.setEducationSpecialize({
                index: idx,
                specialize: value,
              })
            );
          },
        };
      }
      case "Experience": {
        return {
          label: title,
          handler: () => {
            dispatch(
              resumeActions.setExperiencePosition({
                index: idx,
                position: value,
              })
            );
          },
        };
      }
      default:
        return {
          label: "Tóm tắt",
          handler: () => {},
        };
    }
  };

  const input3Handler = (type, value = "", idx = 0) => {
    switch (type) {
      case "Education": {
        return {
          label: "Thành phố",
          handler: () => {
            dispatch(
              resumeActions.setEducationCity({
                index: idx,
                city: value,
              })
            );
          },
        };
      }
      case "Experience": {
        return {
          label: "Thành phố",
          handler: () => {
            dispatch(
              resumeActions.setExperienceCity({
                index: idx,
                city: value,
              })
            );
          },
        };
      }
      default:
        return {
          label: "Tóm tắt",
          handler: () => {},
        };
    }
  };

  const selectOptionsHandler = (
    type,
    isStartDate = true,
    idx = 0,
    value = {}
  ) => {
    switch (type) {
      case "Education": {
        return isStartDate
          ? () =>
              dispatch(
                resumeActions.setEducationStartDate({
                  index: idx,
                  startDate: { ...value },
                })
              )
          : () =>
              dispatch(
                resumeActions.setEducationEndDate({
                  index: idx,
                  endDate: { ...value },
                })
              );
      }
      case "Experience": {
        console.log("Testttt");
        return isStartDate
          ? () => {
              console.log(value);
              dispatch(
                resumeActions.setExperienceStartDate({
                  index: idx,
                  startDate: { ...value },
                })
              );
            }
          : () =>
              dispatch(
                resumeActions.setExperienceEndDate({
                  index: idx,
                  endDate: { ...value },
                })
              );
      }
      case "Certificate": {
        return () =>
          dispatch(
            resumeActions.setCertificateDate({
              index: idx,
              date: { ...value },
            })
          );
      }
      default:
        return () => {};
    }
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
                label={input1Handler(type).label}
                handler={(e) => {
                  input1Handler(type, e.target.value, idx).handler();
                }}
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
                    label={input2Handler(type, title).label}
                    handler={(e) => {
                      input2Handler(type, title, e.target.value, idx).handler();
                    }}
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
                    label={input3Handler(type).label}
                    handler={(e) => {
                      input3Handler(type, e.target.value, idx).handler();
                    }}
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
                    selectOptionsHandler={(value) => {
                      selectOptionsHandler(type, true, idx, value)();
                    }}
                  />
                ) : (
                  <>
                    <SelectOptions
                      formType={"Ngày bắt đầu"}
                      width={"145px"}
                      widthContainer={"50%"}
                      selectOptionsHandler={(value) => {
                        selectOptionsHandler(type, true, idx, value)();
                      }}
                    />
                    <SelectOptions
                      formType={"Ngày kết thúc"}
                      width={"160px"}
                      widthContainer={"50%"}
                      selectOptionsHandler={(value) => {
                        selectOptionsHandler(type, false, idx, value)();
                      }}
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
