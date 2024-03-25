import React from "react";
import styled from "styled-components";

const QRCode = () => {
  return (
    <Wrapper>
      <img
        alt="QR code of the FrontendMentor website"
        src="image-qr-code.png"
      />
      <h2>Improve your front-end skills by building projects</h2>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 20rem;

  padding: 16px;
  padding-bottom: 40px;
  margin-inline: 24px;

  text-align: center;
  border-radius: 20px;
  background-color: var(--color-white);
  filter: drop-shadow(0 25px 25px hsl(0deg 0% 0% / 5%));

  img {
    display: block;
    width: 100%;
    border-radius: 10px;
  }

  h2 {
    margin-top: 24px;
    font-size: ${22 / 16}rem;
    font-weight: var(--font-bold);
    color: var(--color-dark-blue);
  }

  p {
    margin-top: 22px;
    margin-inline: 16px;
    font-size: ${15 / 16}rem;
    font-weight: var(--font-regular);
    color: var(--color-gray-blue);
  }
`;

export default QRCode;
