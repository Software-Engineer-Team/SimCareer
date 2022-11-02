import {
  HeaderDashBoard,
  NavBarDashBoard,
  BodyDashBoard,
} from "@components/index";
import { ContainerDashBoard } from "./DashBoard.styled";

const DashBoard = () => {
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
