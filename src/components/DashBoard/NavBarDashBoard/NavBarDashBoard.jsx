import { NavBar, UlNav, LiTag } from "./NavBarDashBoard.styled";
import { MdOutlineDashboard, MdDeviceHub } from "react-icons/md";
import { HiOutlineInbox } from "react-icons/hi";
import { IoIosPricetags } from "react-icons/io";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NavBarDashBoard = (props) => {
  useEffect(() => {
    let pathname = window.location.pathname.substring(1);
    document.getElementById(pathname)?.classList.add("active");
    return () => {
      document.getElementById(pathname)?.classList.remove("active");
    };
  }, [window.location.pathname]);

  return (
    <NavBar>
      <Link to="/create-resume">
        <div className="menu-container">
          <div className="menu-logo">
            <img src="/images/rounded_logo.png" alt="Logo" />
            <div>SIMCV</div>
          </div>
        </div>
      </Link>
      <UlNav>
        <Link to="/dash-board" id="dash-board">
          <LiTag w="1.5rem" h="1.5rem">
            <div className="svg">
              <MdOutlineDashboard />
            </div>
            {/* <span>Dash Board</span> */}
          </LiTag>
        </Link>
        <Link to="/skill-trees" id="skill-trees">
          <LiTag w="1.5rem" h="1.5rem">
            <div className="svg">
              <MdDeviceHub />
            </div>
            {/* <span>Skill Tree</span> */}
          </LiTag>
        </Link>
        {/* <Link to="/price-list" id="price-list"> */}
        {/*   <LiTag w="1.5rem" h="1.5rem"> */}
        {/*     <div className="svg"> */}
        {/*       <IoIosPricetags /> */}
        {/*     </div> */}
        {/*     <span>Inbox</span> */}
        {/*   </LiTag> */}
        {/* </Link> */}

        <Link to="/score-cv" id="score-cv">
          <LiTag w="1.5rem" h="1.5rem">
            <div className="svg">
              <ImProfile />
            </div>
            {/* <span>Dash Board</span> */}
          </LiTag>
        </Link>
      </UlNav>
    </NavBar>
  );
};
export default NavBarDashBoard;
