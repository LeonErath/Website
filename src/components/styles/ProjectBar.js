import styled from "styled-components";

export const ProjectBar = styled.div`
  background: #f2f2f0;
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto;
  grid-auto-rows: minmax(100px, auto);
  padding-left: 10%;
  grid-gap: 140px;
  padding-right: 10%;

  @media (max-width: 1100px) {
    grid-template-columns: auto;
    grid-gap: 0;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const SubItem = styled.div`
  max-width: 400px;
  padding: 20px;
  text-align: center;

  @media (max-width: 700px) {
    padding: 10px;
  }
  div:nth-of-type(1) {
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 20px;
    @media (max-width: 700px) {
      font-size: 14px;
      letter-spacing: 2px;
    }
  }
  div:nth-of-type(2) {
    letter-spacing: 0.9px;
    font-size: 16px;
    font-weight: 100;
    line-height: 1.4;
    margin-top: 16px;

    @media (max-width: 700px) {
      font-size: 12px;
      letter-spacing: 1px;
      line-height: 1.4;
    }
  }
`;
