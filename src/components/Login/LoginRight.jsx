import React from "react";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import { LoginRightContainer } from "./LoginRight.styled";
import useScript from "@hooks/useScript";
import imgs from "@assets/data/imgs";
let scriptUrl = "/assets/js/custom-slick.js";

const LoginRight = () => {
  useScript(scriptUrl);

  return (
    <LoginRightContainer id="login-right-container">
      <div className="login-right-content">
        <img src="/images/simcareer.png" alt="" />
        <div className="slick-img-content">
          <div className="slick-img-backup"></div>
          {imgs.map(({ url }, idx) => {
            return (
              <img
                key={idx}
                src={url}
                className={idx !== 0 ? "hidden" : ""}
                alt=""
              />
            );
          })}
        </div>
        <div className="slick-img-title">
          All-in-One AI-Driven Career Development Platform
        </div>
        <div className="slick-img-description">
          17+ Career Hacking Methodologies including daily job trackers, resume
          optimization, weekly interview practices
        </div>
        <div className="slick-btn">
          <div className="slick-btn-back">
            <IoArrowBackCircle />
          </div>
          <div className="slick-dots">
            {Array(imgs.length)
              .fill()
              .map((_, idx) => {
                return (
                  <div
                    key={idx}
                    className={idx === 0 ? "dot-active" : ""}
                  ></div>
                );
              })}
          </div>
          <div className="slick-btn-forward">
            <IoArrowForwardCircle />
          </div>
        </div>
      </div>
    </LoginRightContainer>
  );
};

export default LoginRight;
