import React from "react";
import { LoginLeftContainer } from "./LoginLeft.styled";
import LoginLeftContent from "./LoginLeftContent";
import Registration from "./Registration";

const LoginLeft = (props) => {
  return (
    <LoginLeftContainer type={props.type}>
      {props.type === "login" ? <LoginLeftContent /> : <Registration />}
    </LoginLeftContainer>
  );
};

export default LoginLeft;
