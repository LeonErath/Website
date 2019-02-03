import styled from "styled-components";
import { Document, Page } from "react-pdf";
import { BounceLoader } from "react-spinners";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;

  margin-bottom: 20px;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px;
`;

const DownloadButton = styled.div`
  padding: 6px 16px 6px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  text-align: center;
  cursor: pointer;
  background: #fff;
  border: 1px solid #1ecd97;

  a {
    color: #1ecd97;
    font-weight: 100;
  }
  &:hover {
    a {
      color: white;
    }

    background: #1ecd97;
  }
`;
const EmailButton = styled.div`
  margin-left: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  background: #fff;
  border: 1px solid #1ecd97;
  height: 22px;
  width: 22px;
  fill: #1ecd97;
  svg {
    height: 20px;
    width: 20px;
  }

  &:hover {
    svg {
      fill: white;
    }

    background: #1ecd97;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledDoc = styled(Document)`
  margin: 0 !important;
  padding: 0 !important;
  width: auto !important;
  height: auto !important;
  overflow: hidden;
  div {
    margin: 0 !important;
    padding: 0 !important;
    width: auto !important;
    height: auto !important;
    overflow: hidden;
    svg {
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      height: auto !important;
      overflow: hidden;
    }
  }
`;

class Resume extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <Div>
        <Div2>
          <StyledDoc
            renderMode="svg"
            file="/static/resume/Lebenslauf.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </StyledDoc>
          <Links>
            <DownloadButton>
              <a href="/static/resume/Lebenslauf.pdf" download>
                Download
              </a>
            </DownloadButton>
            <EmailButton>
              <a href="mailto:me@leonerath.de">
                <svg viewBox="0 0 31.012 31.012">
                  <g>
                    <g>
                      <path d="M25.109,21.51c-0.123,0-0.246-0.045-0.342-0.136l-5.754-5.398c-0.201-0.188-0.211-0.505-0.022-0.706c0.189-0.203,0.504-0.212,0.707-0.022l5.754,5.398c0.201,0.188,0.211,0.505,0.022,0.706C25.375,21.457,25.243,21.51,25.109,21.51z" />
                      <path d="M5.902,21.51c-0.133,0-0.266-0.053-0.365-0.158c-0.189-0.201-0.179-0.518,0.022-0.706l5.756-5.398c0.202-0.188,0.519-0.18,0.707,0.022c0.189,0.201,0.179,0.518-0.022,0.706l-5.756,5.398C6.148,21.465,6.025,21.51,5.902,21.51z" />
                    </g>
                    <path d="M28.512,26.529H2.5c-1.378,0-2.5-1.121-2.5-2.5V6.982c0-1.379,1.122-2.5,2.5-2.5h26.012c1.378,0,2.5,1.121,2.5,2.5v17.047C31.012,25.408,29.89,26.529,28.512,26.529z M2.5,5.482c-0.827,0-1.5,0.673-1.5,1.5v17.047c0,0.827,0.673,1.5,1.5,1.5h26.012c0.827,0,1.5-0.673,1.5-1.5V6.982c0-0.827-0.673-1.5-1.5-1.5H2.5z" />
                    <path d="M15.506,18.018c-0.665,0-1.33-0.221-1.836-0.662L0.83,6.155C0.622,5.974,0.6,5.658,0.781,5.449c0.183-0.208,0.498-0.227,0.706-0.048l12.84,11.2c0.639,0.557,1.719,0.557,2.357,0L29.508,5.419c0.207-0.181,0.522-0.161,0.706,0.048c0.181,0.209,0.16,0.524-0.048,0.706L17.342,17.355C16.835,17.797,16.171,18.018,15.506,18.018z" />
                  </g>
                </svg>
              </a>
            </EmailButton>
          </Links>
        </Div2>
      </Div>
    );
  }
}

export default Resume;
