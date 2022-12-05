import styled from "styled-components";
import { mediaQuery } from "../../components/Breakpoints/Breakpoints";

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  flex-start: start;
  width: 100%;
  margin-bottom: 24px;
  margin-top: 42px;

  .arrow {
    display: none;
  }

  .flow {
    display: flex;
    align-items: center;
    align-content: center;
  }

  .right {
    display: block;
    margin-right: 6px;
  }

  h1 {
    font-weight: 600;
    font-size: 24px;
    margin-left: 0;
    margin-top: 16px;
    margin-bottom: 0px;
  }

  .link {
    margin-right: 6px;
    color: #605d66;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
  }

  ${mediaQuery.desktop`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  margin-bottom: 32px;

  .arrow {
    display: block;
  }

  h1 {
    font-weight: 600;
    font-size: 24px;
    margin-left: 6px;
    margin-top: 0px;
  }

  .right {
    display: none;
  }
  `}

  ${mediaQuery.tablet`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  margin-bottom: 32px;

  .arrow {
    display: block;
  }

  h1 {
    font-weight: 600;
    font-size: 24px;
    margin-left: 6px;
    margin-top: 0px;
  }

  .right {
    display: none;
  }
  `}
`;

export const Card = styled.div`
  border: 0.5px solid #d9d8da;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 24px;

  .header {
    display: flex;
    align-items: center;
    align-content: center;
    font-weight: 500;
    font-size: 16px;
    padding: 16px;
    border-bottom: 0.5px solid #d9d8da;
  }

  .circle {
    width: 48px;
    height: 48px;
    background: #10aa69;
    display: grid;
    place-items: center;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    border-radius: 100%;
    margin-right: 8px;
  }

  .body {
    padding: 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    align-content: center;
  }

  ${mediaQuery.desktop`
  .body {
    padding: 16px;
    display: flex;
    align-items: center;
    align-content: center;
  }
  `}

  ${mediaQuery.tablet`
  .body {
    padding: 16px;
    display: flex;
    align-items: center;
    align-content: center;
  }
  `}

  .content_box {
    margin-right: 24px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    margin-bottom: 4px;
    color: #605d66;
    font-weight: 400;
    font-size: 12px;
  }

  .content_text {
    font-weight: 500;
    font-size: 16px;
    margin-top: 0;
  }
`;
