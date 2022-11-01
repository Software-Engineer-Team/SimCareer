import React from "react";
import { LoginContainer, LoginContent } from "./LoginPage.styled";
import { LoginRight, LoginLeft } from "@components/index";

const LoginPage = (props) => {
  return (
    <LoginContainer>
      <LoginContent>
        <LoginLeft type={props.type} />
        <LoginRight />
      </LoginContent>
    </LoginContainer>
  );
};

export default LoginPage;
