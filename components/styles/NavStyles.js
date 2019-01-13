import styled from "styled-components";

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 1.5rem;
  a,
  button {
    padding: 0.5rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 1300px) {
      padding: 4px 10px 10px 10px;
    }
    @media (max-width: 700px) {
      font-size: 10px;
    }
    &:before {
      content: "";
      width: 2px;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: ${props => props.theme.black};
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.3s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
      @media (max-width: 700px) {
        width: calc(33% - 30px);
      }
    }
  }
  @media (max-width: 1300px) {
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavStyles;
