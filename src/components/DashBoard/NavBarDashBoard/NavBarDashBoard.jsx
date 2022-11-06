import { NavBar, UlNav, LiTag } from "./NavBarDashBoard.styled";
import { MdOutlineDashboard, MdDeviceHub } from "react-icons/md";
import { HiOutlineInbox } from "react-icons/hi";
import { Link } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";

const NavBarDashBoard = (props) => {
  return (
    <NavBar>
      <Link to="#">
        <div className="menu-container">
          <div className="menu-logo">
            <img src="/images/rounded_logo.png" alt="Logo" />
            <div>SIRI</div>
          </div>
        </div>
      </Link>
      <UlNav>
        <Link to="" className="active">
          <LiTag w="1.5rem" h="1.5rem">
            <div className="svg">
              <MdOutlineDashboard />
            </div>
            <span>Dash Board</span>
          </LiTag>
        </Link>
        <Link to="">
          <LiTag w="1.5rem" h="1.5rem">
            <div className="svg">
              <HiOutlineInbox />
            </div>
            <span>Inbox</span>
          </LiTag>
        </Link>
        <Link to="">
          <LiTag w="1.5rem" h="1.5rem">
            <div className="svg">
              <MdDeviceHub />
            </div>
            <span>Skill Tree</span>
          </LiTag>
        </Link>
      </UlNav>
    </NavBar>
  );
};
export default NavBarDashBoard;
