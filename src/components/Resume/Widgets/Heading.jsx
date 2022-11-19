import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { SlHome } from "react-icons/sl";
import styled from "styled-components";

const Heading = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderContentLeft>
          <h1 className="name">Nguyen Thi A</h1>
          <h1 className="occupation">Thực tập sinh Marketing</h1>
          <div className="introduction">
            <div className="item">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <span>0123456789</span>
            </div>
            <div className="item">
              <div className="icon">
                <TfiEmail />
              </div>
              <span>anniennguyen.work@gmail.com</span>
            </div>
            <div className="item">
              <div className="icon">
                <AiOutlineLink />
              </div>
              <span>LinkedIn: Annien Nguyen</span>
            </div>
            <div className="item">
              <div className="icon">
                <SlHome />
              </div>
              <span>123 nguyễn tri phương, quận 10, tp hồ chí minh</span>
            </div>
          </div>
        </HeaderContentLeft>
        <HeaderContentRight>
          <img src="/images/simcareer.png" alt="" />
        </HeaderContentRight>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Heading;

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #000000;
  color: #ffffff;
`;

const HeaderContent = styled.div`
  display: flex;
  padding: 25px 55px;
`;

const HeaderContentLeft = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    margin: 0;
    text-transform: uppercase;
    font-family: Cambria, Georgia, serif;
  }

  .occupation {
    font-weight: 400;
  }

  .introduction {
    display: flex;
    flex-wrap: wrap;

    .item {
      display: flex;
      /* width: 50%; */
      padding: 15px;

      .icon {
        background: #ffffff;
        min-width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;

        svg {
          position: relative;
          bottom: 1px;
          color: #000000;
        }
      }
      gap: 15px;
      max-width: 500px;

      & > span {
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
`;

const HeaderContentRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 50%;
    width: 345px;
    height: 345px;
    object-fit: cover;
  }
`;
