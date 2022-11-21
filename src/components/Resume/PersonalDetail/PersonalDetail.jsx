import styled from "styled-components";
import React, { useState } from "react";
import { Button, Input, Portal, SubmitImage } from "@components/index";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import { MdPhotoCamera } from "react-icons/md";
import { PersonalDetailContainer } from "./PersonalDetail.styeld";
import { useDispatch, useSelector } from "react-redux";
import { resumeActions } from "~/store/resume-slice";

const PersonalDetail = () => {
  const {
    personalDetail: {
      name,
      email,
      occupation,
      phoneNum,
      address,
      image,
      linkedinUrl,
    },
  } = useSelector((state) => state.resume);
  const [showImageForm, setShowImageForm] = useState(false);
  const [showPersonalContent, setShowPersonalContent] = useState(false);
  const dispatch = useDispatch();

  const uploadImageHandler = (imgRef) => {
    if (imgRef.current.files[0]) {
      const fReader = new FileReader();
      const file = imgRef.current.files[0];
      fReader.readAsDataURL(file);
      fReader.onload = () => {
        dispatch(
          resumeActions.setPersonalDetailImage({ image: fReader.result })
        );
      };
    }
  };
  const closeImageFormHandler = () => {
    setShowImageForm(false);
  };
  const openImageFormHandler = () => {
    setShowImageForm(true);
  };
  const togglePersonalContentHandler = () => {
    setShowPersonalContent(!showPersonalContent);
  };

  const nameHandler = (e) => {
    dispatch(
      resumeActions.setPersonalDetailName({
        name: e.target.value,
      })
    );
  };

  const emailHanlder = (e) => {
    dispatch(
      resumeActions.setPersonalDetailEmail({
        email: e.target.value,
      })
    );
  };

  const occupationHandler = (e) => {
    dispatch(
      resumeActions.setPersonalDetailOccupation({
        occupation: e.target.value,
      })
    );
  };

  const phoneHandler = (e) => {
    dispatch(
      resumeActions.setPersonalDetailPhoneNum({
        phoneNum: e.target.value,
      })
    );
  };

  const addressHandler = (e) => {
    dispatch(
      resumeActions.setPersonalDetailAddress({
        address: e.target.value,
      })
    );
  };

  const linkedinUrlHandler = (e) => {
    dispatch(
      resumeActions.setPersonalDetailLinkedinUrl({
        linkedinUrl: e.target.value,
      })
    );
  };

  return (
    <PersonalDetailContainer>
      <div className="personal-detail">
        <div className="personal-detail-header">
          <div className="header-title">Chi tiết cá nhân</div>
          <div className="header-btn">
            <Button onClick={togglePersonalContentHandler}>
              {showPersonalContent ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </Button>
          </div>
        </div>
        {showPersonalContent && (
          <div className="personal-detail-content">
            <div className="detail-intro">
              <div className="detail-intro-img-container">
                <div className="detail-intro-img-content">
                  <div className="img-header">
                    <div className="img-header-text">Hình ảnh</div>
                    <div className="img-header-btn">
                      <FiMoreVertical />
                    </div>
                  </div>
                  <div className="img-content" onClick={openImageFormHandler}>
                    {image && (
                      <div className="show-img">
                        <img src={image} alt="" />
                      </div>
                    )}
                    <div className="icon">
                      <MdPhotoCamera />
                    </div>
                  </div>
                  {showImageForm && (
                    <Portal>
                      <SubmitImage
                        closeImageFormHandler={closeImageFormHandler}
                        uploadImageHandler={uploadImageHandler}
                      />
                    </Portal>
                  )}
                </div>
              </div>
              <div className="detail-intro-input">
                <Input
                  type="text"
                  label="Họ và tên"
                  handler={nameHandler}
                  value={name}
                  error={() => {}}
                  width={"90%"}
                  widthContainer={"40%"}
                />
                <Input
                  type="text"
                  label="E-mail"
                  handler={emailHanlder}
                  value={email}
                  error={() => {}}
                  width={"100%"}
                  widthContainer={"60%"}
                />
                <Input
                  type="text"
                  label="Tiêu đề"
                  handler={occupationHandler}
                  value={occupation}
                  error={() => {}}
                  width={"100%"}
                />
              </div>
            </div>

            <div style={{ padding: "8px 0" }}>
              <Input
                type="number"
                label="Số điện thoại"
                handler={phoneHandler}
                value={phoneNum}
                error={() => {}}
                width={"100%"}
                paddingContainer={5}
              />
              <Input
                type="url"
                label="Linkedin"
                handler={linkedinUrlHandler}
                value={linkedinUrl}
                error={() => {}}
                width={"100%"}
                paddingContainer={5}
              />
              <Input
                type="text"
                label="Địa chỉ nhà"
                handler={addressHandler}
                value={address}
                error={() => {}}
                width={"100%"}
                paddingContainer={5}
              />
            </div>
          </div>
        )}
      </div>
    </PersonalDetailContainer>
  );
};

export default PersonalDetail;
