import { NavBar, UlNav, LiTag } from "./NavBarDashBoard.styled";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineDashboard, MdDeviceHub } from "react-icons/md";
import { HiOutlineInbox } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavBarDashBoard = (props) => {
  return (
    <NavBar>
      <Link to="#">
        <img src="/images/rounded_logo.png" alt="Logo" />
      </Link>
      <UlNav>
        <Link to="" className="active">
          <LiTag w="1.5rem" h="1.5rem">
            <MdOutlineDashboard />
          </LiTag>
        </Link>
        <Link to="">
          <LiTag w="1.5rem" h="1.5rem">
            <HiOutlineInbox />
          </LiTag>
        </Link>
        <Link to="">
          <LiTag w="1.5rem" h="1.5rem">
            <MdDeviceHub />
          </LiTag>
        </Link>
      </UlNav>
    </NavBar>
  );
};
export default NavBarDashBoard;
