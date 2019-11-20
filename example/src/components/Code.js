import React from "react";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 -16px;
`;

SyntaxHighlighter.registerLanguage("jsx", jsx);

const Code = ({ children }) => (
  <Container>
    <SyntaxHighlighter language="jsx" style={atomDark}>
      {children}
    </SyntaxHighlighter>
  </Container>
);

export default Code;