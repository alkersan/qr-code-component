import React, { useEffect, useState } from "react";
import styled from "styled-components";
import desktopImg from "/starter-pack/design/desktop-design.jpg";

const DesignOverlay = () => {
  const [showDesign, setShowDesign] = useState(false);
  const handleKeyDown = (event) => {
    if (event.code === "KeyD") {
      setShowDesign(!showDesign);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showDesign]);

  return <>{showDesign && <Overlay />}</>;
};

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: url(${desktopImg}) center no-repeat;
  opacity: 100%;
`;

export default DesignOverlay;
