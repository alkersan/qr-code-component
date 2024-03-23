import React from "react";
import styled from "styled-components";
import QRCode from "../QRCode";

const App = () => {
  return (
    <Main>
        <QRCode/>
    </Main>
  );
};

const Main = styled.main`
    background-color: var(--color-light-gray);
    
    min-width: fit-content;
    min-height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default App;
