import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Nav,
  Logo,
  Login,
  NavMenu,
  UserImg,
  SignOut,
  DropDown,
} from "./HeaderDashBoard.styled";
import { useGoogleLogout } from "react-google-login";

import { RiArrowDropDownLine } from "react-icons/ri";

const HeaderDashBoard = (props) => {
  const { signOut, loaded } = useGoogleLogout({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    scope: "",
  });

  const signOutHandler = () => {
    signOut();
    localStorage.setItem("isSignedIn", false);
  };

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
          <a href="/login">
            <DropDown onClick={signOutHandler}>
              <span>Sign Out</span>
            </DropDown>
          </a>
        </SignOut>
      </Fragment>
    </Nav>
  );
};

export default HeaderDashBoard;
