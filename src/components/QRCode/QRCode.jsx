import React from "react";
import styled from "styled-components";

const QRCode = () => {
  return (
      <CardWrapper>
          <img alt="qr-code" src="image-qr-code.png" />
          <h1>Improve your front-end skills by building projects</h1>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </CardWrapper>
  );
};

const CardWrapper = styled.div`
    max-width: min-content;
    
    padding: 16px;
    padding-bottom: 40px;

    text-align: center;
    border-radius: 20px;
    background-color: var(--color-white);
    filter: drop-shadow(0 25px 25px hsl(0deg 0% 0% / 5%));

    img {
        display: block;
        width: 288px;
        height: 288px;
        border-radius: 10px;
    }
    
    h1 {
        margin-top: 24px;
        font-size: ${22 / 16}rem;
        font-weight: var(--font-bold);
        color: var(--color-dark-blue)
    }

    p {
        margin-inline: 16px;
        margin-top: 22px;
        font-size: ${15 / 16}rem;
        font-weight: var(--font-regular);
        color: var(--color-gray-blue);
    }
`;

export default QRCode;
