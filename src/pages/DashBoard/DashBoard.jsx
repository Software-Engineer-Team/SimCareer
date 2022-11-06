import {
  HeaderDashBoard,
  NavBarDashBoard,
  BodyDashBoard,
} from "@components/index";
/* import useScript from "~/hooks/useScript"; */
import { ContainerDashBoard } from "./DashBoard.styled";

const DashBoard = () => {
  /* useScript("/assets/js/particles.js"); */
  return (
    <>
      <HeaderDashBoard />
      <ContainerDashBoard>
        <NavBarDashBoard />
        <BodyDashBoard />
      </ContainerDashBoard>
    </>
  );
};

export default DashBoard;
