import React from "react";
import styled from "styled-components";
import NavBar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { mediaQuery } from "../components/Breakpoints/Breakpoints";

const Body = styled.div`
  display: flex;
  flex-direction: column;

  .side_bar {
    display: none;
  }

  ${mediaQuery.desktop`
  display: grid;
  grid-template-columns: 240px auto;

  .side_bar {
    display: block;
  }
  `}

  ${mediaQuery.tablet`
  display: grid;
  grid-template-columns: 240px auto;

  .side_bar {
    display: block;
  }
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  .content {
    height: 100vh;
    overflow-y: scroll;
    padding: 16px;
  }

  ${mediaQuery.desktop`
  .content {
    height: 100vh;
    overflow-y: scroll;
    padding: 32px;
  }
  `}
`;

const Layout = ({ children }) => {
  return (
    <Body>
      <div className="side_bar">
        <SideBar />
      </div>
      <Content>
        <div className="header">
          <NavBar />
        </div>
        <div className="content">{children}</div>
      </Content>
    </Body>
  );
};

export default Layout;
