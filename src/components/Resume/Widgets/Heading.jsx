import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { SlHome } from "react-icons/sl";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Heading = () => {
  const { personalDetail } = useSelector((state) => state.resume);

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderContentLeft>
          {personalDetail.name && (
            <h1 className="name">{personalDetail.name}</h1>
          )}

          {personalDetail.occupation && (
            <h1 className="occupation">{personalDetail.occupation}</h1>
          )}

          <div className="introduction">
            {personalDetail.email && (
              <div className="item email">
                <div className="icon">
                  <TfiEmail />
                </div>
                <span>{personalDetail.email}</span>
              </div>
            )}

            {personalDetail.phoneNum && (
              <div className="item phone">
                <div className="icon">
                  <FaPhoneAlt />
                </div>
                <span>{personalDetail.phoneNum}</span>
              </div>
            )}

            {personalDetail.linkedinUrl && (
              <div className="item linkedin">
                <div className="icon">
                  <AiOutlineLink />
                </div>

                <a
                  href={`${personalDetail.linkedinUrl}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {`${personalDetail.linkedinUrl}`}
                </a>
              </div>
            )}

            {personalDetail.address && (
              <div className="item address">
                <div className="icon">
                  <SlHome />
                </div>
                <span>{personalDetail.address}</span>
              </div>
            )}
          </div>
        </HeaderContentLeft>
        <HeaderContentRight>
          {personalDetail.image && (
            <img src={`${personalDetail.image}`} alt="" />
          )}
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
  min-height: 365px;
`;

const HeaderContent = styled.div`
  display: flex;
  padding: 25px 55px;
  justify-content: space-between;
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
    min-width: 514px;

    .item {
      display: flex;
      width: 50%;
      padding: 15px;
      min-width: 257px;

      &.address,
      &.linkedin {
        width: 100%;
      }

      &.email {
        width: 65%;
        min-width: 400.1px;
      }

      &.phone {
        width: 35%;
        min-width: 250.5px;
      }

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

      & > span,
      & > a {
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 1; /* number of lines to show */
        line-clamp: 1;
        -webkit-box-orient: vertical;
      }

      & > a {
        text-decoration: none;
        color: #ffffff;
      }
    }
  }
`;

const HeaderContentRight = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 9px;
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
`;
