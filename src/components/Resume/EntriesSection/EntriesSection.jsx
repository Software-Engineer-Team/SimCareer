import React, { useState } from "react";
import { Button } from "@components/index";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Container } from "./EntriesSection.styled";

import { BiPlus } from "react-icons/bi";
import EntriesSectionItem from "./EntriesSectionItem/EntriesSectionItem";
import { useDispatch, useSelector } from "react-redux";
import { resumeActions } from "~/store/resume-slice";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

const EntriesSection = ({ headerTitle, btnText, type }) => {
  const dispatch = useDispatch();
  const { education, experience, skill, certificate, hobby, achievement } =
    useSelector((state) => state.resume);
  const [showContent, setShowContent] = useState(false);
  const toggleContentHandler = () => {
    setShowContent(!showContent);
  };

  const addEntryHandler = (type) => {
    switch (type) {
      case "Education": {
        return {
          title: "Chuyên ngành",
          entryItem: education,
          handler: () => {
            dispatch(resumeActions.addEducationEntry());
          },
        };
      }
      case "Experience": {
        return {
          title: "Vị trí",
          entryItem: experience,
          handler: () => {
            dispatch(resumeActions.addExperienceEntry());
          },
        };
      }
      case "Skill": {
        return {
          title: "Kỹ năng",
          entryItem: skill,
          handler: () => {
            dispatch(resumeActions.addSkillEntry());
          },
        };
      }
      case "Certificate": {
        return {
          title: "Chứng chỉ",
          entryItem: certificate,
          handler: () => {
            dispatch(resumeActions.addCertificateEntry());
          },
        };
      }
      case "Hobby": {
        return {
          title: "Sở thích",
          entryItem: hobby,
          handler: () => {
            dispatch(resumeActions.addHobbyEntry());
          },
        };
      }
      case "Achievements": {
        return {
          title: "Thành tích",
          entryItem: achievement,
          handler: () => {
            dispatch(resumeActions.addAchievementEntry());
          },
        };
      }
      default:
        return {
          title: "Tiêu đề",
          entryItem: [],
          handler: () => {},
        };
    }
  };

  return (
    <Container>
      <div className="personal-detail">
        <div className="personal-detail-header">
          <div className="header-title">{headerTitle}</div>
          <div className="header-btn">
            <Button style={{ marginRight: "10px" }}>
              <MdOutlineTipsAndUpdates />{" "}
            </Button>
            <Button onClick={toggleContentHandler}>
              {showContent ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </Button>
          </div>
        </div>

        {showContent && (
          <div className="items">
            {addEntryHandler(type).entryItem.map((_el, idx) => {
              return (
                <EntriesSectionItem
                  title={addEntryHandler(type).title}
                  toggleContentHandler={toggleContentHandler}
                  type={type}
                  idx={idx}
                  key={idx}
                />
              );
            })}

            <div className="add-btn" onClick={addEntryHandler(type).handler}>
              <div className="btn-icon-container">
                <div className="btn-icon-content">
                  <span className="btn-icon">
                    <BiPlus />
                  </span>
                  <span className="btn-text">{btnText}</span>
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
