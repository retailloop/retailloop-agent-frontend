import styled from "styled-components";
import { mediaQuery } from "../../components/Breakpoints/Breakpoints";

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  //   place-items: center;
  //   margin-bottom: 32px;

  ${mediaQuery.desktop`
  display: grid;
  place-items: center;
//   margin-bottom: 32px;

.form {
    width: 352px;
    border: 1px solid red;
}
  `}

  .form_content {
    display: flex;
    flex-direction: column;
  }

  label {
    padding-bottom: 8px;
    font-weight: 600;
    font-size: 10px;
  }

  button {
    border: none;
    outline: none;
    display: grid;
    place-items: center;
    color: #fff;
    background: #3f12c4;
    border-radius: 10px;
    margin-top: 24px;
    width: 100%;
    height: 40px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  margin-bottom: 16px;

  ${mediaQuery.desktop`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-bottom: 16px;
  `}

  ${mediaQuery.tablet`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin-bottom: 16px;
  `}

  .form_content {
    display: flex;
    flex-direction: column;
  }

  label {
    padding-bottom: 8px;
    font-weight: 600;
    font-size: 10px;
  }
`;
