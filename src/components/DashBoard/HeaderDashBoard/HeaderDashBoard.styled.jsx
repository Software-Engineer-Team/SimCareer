import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 1.5px;
  z-index: 300 !important;
  box-shadow: 3px 4px 4px rgb(0 0 0 / 7%);
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 85px;

  & img {
    width: 100%;
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 15px;
  }
`;

export const NavMenu = styled.div`
  margin-left: 25px;
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #ffffff;

  & > a:first-child {
    padding-left: 5px;
  }

  & a {
    padding: 0 12px;
    display: flex;
    align-items: center;
    color: #000;
    text-decoration: none;
    /* font-family: Cambria, Georgia, serif; */
    font-family: "Roboto", Helvetica, Arial, sans-serif !important;

    & > span {
      font-size: 17px;
      font-weight: 600;
    }

    &:hover {
      & > span:before {
        transform: scaleX(1);
      }
    }
  }

  & svg {
    height: 20px;
    width: 20px;
    min-width: 20px;
  }

  & span {
    font-size: 13px;
    padding: 1px 0;
    margin-left: 8px;
    line-height: 1.5;
    cursor: pointer;
    position: relative;
    letter-spacing: 1.42px;
    line-height: 2.98;
    &:before {
      content: "";
      background: #000;
      height: 2px;
      position: absolute;
      bottom: 5px;
      width: 100%;
      transform-origin: left center;
      transform: scaleX(0);
      transition: transform 0.2s ease-in-out;
    }
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const UserImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const DropDown = styled.div`
  position: absolute;
  right: 0;
  top: 58px;
  background-color: rgb(19, 19, 19);
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  border-radius: 0px 0px 18px 0px rgb(0 0 0 / 50%);
  letter-spacing: 2px;
  width: 100px;
  text-align: center;
  opacity: 0;
  color: #ffffff;

  span {
    /* font-family: Cambria, Georgia, serif; */
    font-family: "Roboto", Helvetica, Arial, sans-serif !important;
    font-size: 14px;
  }
`;

export const SignOut = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 58px;
  width: 58px;
  margin-right: 10px;
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
