import styled from "styled-components";
import React, { useState } from "react";
import { Button, Input, Portal, SubmitImage } from "@components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import { MdPhotoCamera } from "react-icons/md";
import { PersonalDetailContainer } from "./PersonalDetail.styeld";

const PersonalDetail = () => {
  const [showImageForm, setShowImageForm] = useState(false);
  const [image, setImage] = useState({});
  const [showPersonalContent, setShowPersonalContent] = useState(false);

  const uploadImageHandler = (imgRef) => {
    if (imgRef.current.files[0]) {
      const fReader = new FileReader();
      const file = imgRef.current.files[0];
      fReader.readAsDataURL(imgRef.current.files[0]);
      fReader.onload = () => {
        setImage({
          url: fReader.result,
          name: file.name,
          size: (file.size / 1024).toFixed(2),
        });
        closeImageFormHandler();
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
                    {image?.url && (
                      <div className="show-img">
                        <img src={image?.url} alt="" />
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
                  handler={() => {}}
                  value={() => {}}
                  error={() => {}}
                  width={"90%"}
                  widthContainer={"40%"}
                />
                <Input
                  type="text"
                  label="E-mail"
                  handler={() => {}}
                  value={() => {}}
                  error={() => {}}
                  width={"100%"}
                  widthContainer={"60%"}
                />
                <Input
                  type="text"
                  label="Tiêu đề"
                  handler={() => {}}
                  value={() => {}}
                  error={() => {}}
                  width={"100%"}
                />
              </div>
            </div>

            <div style={{ padding: "8px 0" }}>
              <Input
                type="number"
                label="Số điện thoại"
                handler={() => {}}
                value={() => {}}
                error={() => {}}
                width={"100%"}
                paddingContainer={5}
              />
              <Input
                type="text"
                label="Địa chỉ nhà"
                handler={() => {}}
                value={() => {}}
                error={() => {}}
                width={"100%"}
                paddingContainer={5}
              />
              <Input
                type="number"
                label="Mã bưu điện"
                handler={() => {}}
                value={() => {}}
                error={() => {}}
                width={"100%"}
                paddingContainer={5}
              />
              <Input
                type="text"
                label="Thành phố"
                handler={() => {}}
                value={() => {}}
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
