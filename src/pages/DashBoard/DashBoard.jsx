import React from "react";
import {
  HeaderDashBoard,
  NavBarDashBoard,
  BodyDashBoard,
} from "@components/index";
import { SkillTree, Profile } from "@components/index";
import { ContainerDashBoard } from "./DashBoard.styled";

const DashBoard = (props) => {
  return (
    <>
      <HeaderDashBoard />
      <ContainerDashBoard>
        <NavBarDashBoard />
        {props.type === "skill-trees" ? (
          <SkillTree />
        ) : props.type === "profile" ? (
          <Profile />
        ) : (
          <BodyDashBoard />
        )}
      </ContainerDashBoard>
    </>
  );
};

export default DashBoard;
