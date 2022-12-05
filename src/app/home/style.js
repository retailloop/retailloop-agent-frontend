import styled from "styled-components";
import bg from "../../assets/line.png";
import { mediaQuery } from "../../components/Breakpoints/Breakpoints";

export const Container = styled.div`
  h1 {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #2b292f;
    margin-bottom: 26px;
  }
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;

  ${mediaQuery.desktop`
  display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  `}

  .card_n {
    background: #6a3cee;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0px 3px 6px 1px rgba(31, 25, 25, 0.1);
    padding: 16px;
  }

  .card_body {
    display: flex;
    justify-content: space-between;
    // align-items: center
  }

  .circle {
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
    background: #ffffff33;
    border-radius: 100%;
  }

  .left_text {
    text-align: right;
  }

  .text {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 5px;
    // line-height: 19px;
  }

  #cont {
    width: 170px;
    margin-top: 0;
    font-weight: 500;
    font-size: 12px;
    text-align: right;
  }

  .phase {
    font-size: 48px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0;
  }

  .progress_text {
    font-weight: 700;
    font-size: 10px;
    color: #ffffff;
  }
`;

export const ProgressBar = styled.div`
  background: #ffffff66;
  border-radius: 10px;
  height: 8px;
  width: 100%;

  .inner {
    background: #fff;
    border-radius: 10px;
    height: 8px;
    width: 80%;
  }
`;

export const Cardn = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column !important;
  background: #fff;
  border: 1px solid #d9d8da;
  border-radius: 10px;

  .circle {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    background: #123fdf33;
    border-radius: 100%;
  }

  .number {
    margin-bottom: 4px;
    font-weight: 600;
    font-size: 24px;
    color: #2b292f;
  }

  .text {
    font-weight: 500;
    font-size: 12px;
    margin-top: 0;
    color: #605d66;
  }
`;

export const BusinessCard = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 0.5px solid #d9d8da;
  margin-top: 32px;
  margin-bottom: 500px;

  .header {
    padding: 16px;
    font-weight: 600;
    font-size: 16px;
    color: #2b292f;
    border-bottom: 0.5px solid #d9d8da;
  }

  .body {
    padding: 16px;
    margin-top: 26px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  align-content: center;

  .circle {
    background: #10aa69;
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    margin-right: 7px;
    border-radius: 100%;
  }
`;
