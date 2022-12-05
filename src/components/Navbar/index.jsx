import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "../../assets/icons/menuIcon";
import profile from "../../assets/profile.png";
import notify from "../../assets/notification.png";
import { mediaQuery } from "../Breakpoints/Breakpoints";
import Mobile from "../MobileNavbar";

const Container = styled.div`
  width: auto;
  border-bottom: 0.5px solid #d9d8da;
  padding: 12px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  z-index: 5;
  align-items: center;
  align-content: center;

  .others {
    display: flex;
  }

  .icon {
    display: block
    cursor: pointer;
  }

  ${mediaQuery.desktop`
  .icon{
    display: none;
  }
  `}

  ${mediaQuery.tablet`
  .icon{
    display: none;
  }
  `}

  .circle {
    width: 40px;
    height: 40px;
    background-color: #dbd0fb;
    display: grid;
    place-items: center;
    border-radius: 100%;
    margin-right: 35px;
  }
`;

const NavBar = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(false);
  };
  return (
    <Container>
      <Mobile isOpen={show} toggle={toggle} />
      <div className="icon" onClick={() => setShow(!show)}>
        <MenuIcon />
      </div>
      <div></div>
      <div className="others">
        <div className="circle">
          <img src={notify} alt="notification_icon" />
        </div>
        <img src={profile} alt="profile_picture" />
      </div>
    </Container>
  );
};

export default NavBar;
