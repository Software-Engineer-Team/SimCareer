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
  const { education, experience, skill, certificate, hobby } = useSelector(
    (state) => state.resume
  );
  const dispatch = useDispatch();

  const input1Handler = (type, value = "", idx = 0) => {
    switch (type) {
      case "Education": {
        return {
          label: "Trường học",
          inputVal: education?.[idx].school,
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
          inputVal: experience?.[idx].company,
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
          inputVal: skill?.[idx].name,
          handler: () => {
            dispatch(resumeActions.setSkillName({ index: idx, name: value }));
          },
        };
      }
      case "Certificate": {
        return {
          label: "Chứng chỉ",
          inputVal: certificate?.[idx].name,
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
          inputVal: hobby?.[idx].name,
          handler: () => {
            dispatch(resumeActions.setHobbyName({ index: idx, name: value }));
          },
        };
      }
      default:
        return {
          label: "Tiêu đề",
          inputVal: "",
          handler: () => {},
        };
    }
  };

  const input2Handler = (type, title = "", value = "", idx = 0) => {
    switch (type) {
      case "Education": {
        return {
          label: title,
          inputVal: education?.[idx].specialize,
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
          inputVal: experience?.[idx].position,
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
          inputVal: "",
          handler: () => {},
        };
    }
  };

  const input3Handler = (type, value = "", idx = 0) => {
    switch (type) {
      case "Education": {
        return {
          label: "Thành phố",
          inputVal: education?.[idx].city,
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
          inputVal: experience?.[idx].city,
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
          inputVal: "",
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
          ? {
              handler: () =>
                dispatch(
                  resumeActions.setEducationStartDate({
                    index: idx,
                    startDate: { ...value },
                  })
                ),
              selectVal: education?.[idx].startDate,
            }
          : {
              handler: () =>
                dispatch(
                  resumeActions.setEducationEndDate({
                    index: idx,
                    endDate: { ...value },
                  })
                ),
              selectVal: education?.[idx].endDate,
            };
      }
      case "Experience": {
        return isStartDate
          ? {
              handler: () => {
                console.log(value);
                dispatch(
                  resumeActions.setExperienceStartDate({
                    index: idx,
                    startDate: { ...value },
                  })
                );
              },
              selectVal: experience?.[idx].startDate,
            }
          : {
              handler: () =>
                dispatch(
                  resumeActions.setExperienceEndDate({
                    index: idx,
                    endDate: { ...value },
                  })
                ),
              selectVal: experience?.[idx].endDate,
            };
      }
      case "Certificate": {
        return {
          handler: () =>
            dispatch(
              resumeActions.setCertificateDate({
                index: idx,
                date: { ...value },
              })
            ),
          selectVal: certificate?.[idx].date,
        };
      }
      default:
        return {
          handler: () => {},
          selectVal: { month: "January", year: 2024 },
        };
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
                value={input1Handler(type).inputVal}
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
                    value={input2Handler(type).inputVal}
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
                    value={input3Handler(type).inputVal}
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
                    selectVal={selectOptionsHandler(type, true, idx).selectVal}
                    widthContainer={"100%"}
                    selectOptionsHandler={(value) => {
                      selectOptionsHandler(type, true, idx, value).handler();
                    }}
                  />
                ) : (
                  <>
                    <SelectOptions
                      formType={"Ngày bắt đầu"}
                      width={"145px"}
                      selectVal={
                        selectOptionsHandler(type, true, idx).selectVal
                      }
                      widthContainer={"50%"}
                      selectOptionsHandler={(value) => {
                        selectOptionsHandler(type, true, idx, value).handler();
                      }}
                    />
                    <SelectOptions
                      formType={"Ngày kết thúc"}
                      width={"160px"}
                      selectVal={
                        selectOptionsHandler(type, false, idx).selectVal
                      }
                      widthContainer={"50%"}
                      selectOptionsHandler={(value) => {
                        selectOptionsHandler(type, false, idx, value).handler();
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
              <Draft type={type} idx={idx} isEntriesSection={true} />
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
