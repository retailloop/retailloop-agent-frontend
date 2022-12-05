import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import HomeIcon from "../../assets/icons/home";
import ShopIcon from "../../assets/icons/shopIcon";
import logo from "../../assets/logo.png";

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

const Bar = styled.div`
  height: 100vh;
  background-color: #3f12c4;
  padding: 16px;

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

const SideBar = () => {
  const location = useLocation();
  return (
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
  );
};

export default SideBar;
