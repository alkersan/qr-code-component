import React from "react";
import styled from "styled-components";
import QRCode from "./QRCode";

const App = () => {
  return (
    <Main>
      <QRCode />
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;

  background-color: var(--color-light-gray);
`;

export default App;
