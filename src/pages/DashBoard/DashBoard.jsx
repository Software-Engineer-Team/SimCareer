import React from "react";
import {
  HeaderDashBoard,
  NavBarDashBoard,
  BodyDashBoard,
} from "@components/index";
import { SkillTree, Profile, PriceList } from "@components/index";
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
        ) : props.type === "price-list" ? (
          <PriceList />
        ) : (
          <BodyDashBoard />
        )}
      </ContainerDashBoard>
    </>
  );
};

export default DashBoard;
