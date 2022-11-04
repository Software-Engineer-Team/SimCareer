import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Logo,
  Login,
  NavMenu,
  UserImg,
  SignOut,
  DropDown,
} from "./HeaderDashBoard.styled";

import { RiArrowDropDownLine } from "react-icons/ri";

const HeaderDashBoard = (props) => {
  return (
    <Nav>
      <Logo>
        <img src="/images/simcareer-logo.png" alt="Logo"></img>
      </Logo>
      <Fragment>
        <NavMenu>
          <Link to="#">
            <span>All Programs</span>
            <RiArrowDropDownLine />
          </Link>
          <Link>
            <span>Explore</span>
            <RiArrowDropDownLine />
          </Link>
          <Link>
            <span>Help</span>
            <RiArrowDropDownLine />
          </Link>
          <Link>
            <span>Connect</span>
            <RiArrowDropDownLine />
          </Link>
        </NavMenu>
        <SignOut>
          <UserImg src="/images/simcareer-logo.png" />
          {/* <DropDown> */}
          {/*   <span>Sign Out</span> */}
          {/* </DropDown> */}
        </SignOut>
      </Fragment>
    </Nav>
  );
};

export default HeaderDashBoard;
