import styled from "styled-components";
import { mediaQuery } from "../../components/Breakpoints/Breakpoints";

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-bottom: 26px;

  h1 {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #2b292f;
  }
`;

export const Others = styled.div`
  ${mediaQuery.desktop`
display: flex;
  align-content: center;
  align-items: center;
`}
  display: none;
  align-content: center;
  align-items: center;

  .input_box {
    border: 1px solid #d9d8da;
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 10px;
    box-sizing: border-box;
  }

  input {
    border: none;
    height: auto;
    background: transparent;
  }

  .filter_box {
    border: 1px solid #3f12c4;
    border-radius: 10px;
    height: 40px;
    margin-left: 24px;
    width: 80px;
    display: flex;
    align-items: center;
    align-content: center;
    color: #3f12c4;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    justify-content: center;

    &:hover {
      background: #3f12c4;
      color: #fff;
    }
  }

  .icon {
    margin-right: 12px;
  }

  .add {
    margin-left: 24px;
    background: #3f12c4;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    height: 40px;
    width: 136px;
    display: flex;
    align-items: center;
    align-content: center;
    cursor: pointer;
    justify-content: center;
    border-radius: 10px;
  }
`;

export const FilterContent = styled.div`
  position: absolute;
  background: #fff;
  top: 25%;
  left: 79%;
  width: auto;
  box-shadow: 0px 3px 6px 1px rgba(31, 25, 25, 0.1);
  padding: 16px;
  border-radius: 10px;
`;
