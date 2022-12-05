import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import HomeIcon from "../../assets/icons/home";
import ShopIcon from "../../assets/icons/shopIcon";
import logo from "../../assets/logo.png";

const Modal = styled.div`
  color: #000;
  position: fixed;
  z-index: 500;
  width: 30%;
  height: 100vh;
  background: #3f12c4;
  //   display: grid;
  box-shadow: 2px 0px 4px rgba(158, 158, 158, 0.4);
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  padding: 16px;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (max-width: 768px) {
    width: 92%;
  }

  .box {
    padding: 20px;
  }
`;
const Bar = styled.div`
  .logo {
    display: grid;
    place-items: center;
    margin-top: 24px;
  }

  .routes {
    display: flex;
    flex-direction: column;
    margin-top: 28px;
  }

  .link_active {
    color: #3f12c4;
    background: #fff;
    border-radius: 10px;
    padding: 12px 126px 12px 16px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 20px;
    display: flex;
    align-content: center;
    align-items: center;
  }

  .link {
    color: #fff;
    padding: 12px 126px 12px 16px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 20px;
    display: flex;
    align-content: center;
    align-items: center;
  }

  .icons {
    margin-right: 10px;
  }
`;
const routes = [
  {
    id: 2000,
    name: "home",
    link: `/home`,
    icon: <HomeIcon color="#fff" />,
    iconActive: <HomeIcon />,
  },
  {
    id: 3000,
    name: "businesses",
    link: `/businesses`,
    icon: <ShopIcon />,
    iconActive: <ShopIcon color="#3F12C4" />,
  },
];

const Mobile = ({ isOpen, toggle, ...props }) => {
  return (
    <Modal isOpen={isOpen} {...props} onClick={toggle}>
      <Bar>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="routes">
          {routes.map(({ name, link, id, icon, iconActive }) => (
            <NavLink
              to={link}
              key={id}
              className={({ isActive }) => (isActive ? "link_active" : "link")}
            >
              <div className="icons">
                {link === location.pathname
                  ? iconActive
                  : link.includes(location.pathname.split("/")[1])
                  ? iconActive
                  : icon}
              </div>
              {name}
            </NavLink>
          ))}
        </div>
      </Bar>
    </Modal>
  );
};

export default Mobile;
