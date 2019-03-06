import Link from "next/link";
import styled from "styled-components";
import NavStyles from "./styles/NavStyles";

const StyledHeader = styled.header`
  border-top: 2px solid ${props => props.theme.black};

  .bar {
    display: flex;
    justify-content: center;
    padding: 0.3em;

    img {
      width: 1.4em;
    }
  }
`;

const Footer = () => (
  <StyledHeader>
    <div className="bar">
      <NavStyles>
        <Link href="/impressum">
          <a>Impressum</a>
        </Link>
        <Link href="/privacy">
          <a>Privacy</a>
        </Link>
        <Link href="/credit">
          <a>Credit</a>
        </Link>
      </NavStyles>
    </div>
    <div className="bar">
      <NavStyles>
        <Link href="https://github.com/LeonErath">
          <a>
            <img src="/static/github.png" alt="github" />
          </a>
        </Link>
        <Link href="https://www.xing.com/profile/Leon_Erath/cv">
          <a>
            {" "}
            <img src="/static/brand/xing_black.svg" alt="xing" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/leon-erath/">
          <a>
            {" "}
            <img src="/static/brand/linkedin_black.svg" alt="linkedin" />
          </a>
        </Link>
      </NavStyles>
    </div>
  </StyledHeader>
);

export default Footer;
