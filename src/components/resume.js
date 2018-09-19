import React, { Component } from "react";
import { Document, Page } from "react-pdf";

import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
`;

const Div2 = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px;
`;

class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  render() {
    const { pageNumber } = this.state;
    return (
      <Div>
        <Div2>
          <Document
            file="./resume/resume.pdf"
            onLoadSuccess={this.onDocumentLoad}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </Div2>
      </Div>
    );
  }
}

export default Resume;
