import styled from "styled-components";
import Link from "next/link";

export const Emphasize = styled.b`
  color: ${props => (props.color ? props.color : "#000000")};
`;

export const FeatureTitle = styled.div`
  letter-spacing: 3px;
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 16px;
`;
export const FeatureText = styled.div`
  letter-spacing: 0.9px;
  font-size: 16px;
  font-weight: 100;
  line-height: 2;
`;

export const Feature = styled.div`
  text-align: ${props => (props.center ? "center" : "left")};
  margin: 20px;
  width: 250px;
  flex-grow: 1;
`;

export const Fact = styled.div`
  text-align: center;

  font-size: calc(13px + 1vw);
  font-family: Calibri, sans-serif;
  line-height: 2;
  font-weight: 100;
  margin: 24px;
  @media (max-width: 700px) {
    margin: 10px;
  }
`;

export const List = styled.div`
  justify-content: ${props => (props.center ? "center" : "left")};
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 20px;
  display: flex;
  flex-direction: ${props => (props.right ? "row-reverse" : "row")};
  flex-wrap: wrap;
`;

export const NavbarStyled = styled.div`
  padding-top: 10px;
  list-style-type: none;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
`;

export const Div = styled.div`
  background: ${props => (props.color ? props.color : "#000000")};
  height: 57px;
`;

export const NavbarLink = styled.li`
  font-family: "Courier New", Courier, monospace;
  padding: 10px;
  float: right;
  font-size: 14px;
  letter-spacing: 6px;

  :first-child {
    font-size: 24px;
    letter-spacing: 10px;
    float: left;
  }
`;

export const FactList = styled(List)`
  justify-content: center;
  background: ${props => (props.color ? props.color : "#000000")};
`;

export const SecurityList = styled(List)`
  height: 450px;
`;

export const ImageList = styled(List)`
  padding-top: 40px;
  padding-bottom: 40px;
  background: ${props => (props.color ? props.color : "#000000")};
`;

export const Image = styled.img`
  width: 12.5%;
  height: 30%;
`;
export const LinkStyled = styled(Link)`
  padding: 10px;
  color: ${props => (props.textcolor ? props.textcolor : "#ffffff")};
  text-decoration: none;
`;

export const ImageContainer = styled.div`
  flex-grow: 1;
  width: 46%;
  flex-basis: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
