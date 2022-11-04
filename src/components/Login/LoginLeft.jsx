import React from "react";
import ForgotPass from "./ForgotPass";
import { LoginLeftContainer } from "./LoginLeft.styled";
import LoginLeftContent from "./LoginLeftContent";
import Registration from "./Registration";

const LoginLeft = (props) => {
  return (
    <LoginLeftContainer type={props.type}>
      {props.type === "login" ? (
        <LoginLeftContent />
      ) : props.type === "register" ? (
        <Registration />
      ) : (
        <ForgotPass />
      )}
    </LoginLeftContainer>
  );
};

export default LoginLeft;
