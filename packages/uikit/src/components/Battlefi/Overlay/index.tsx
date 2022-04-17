import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const OverlayContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 990;
`;

interface OverlayProps {
  click?: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ click }) => {
  return ReactDOM.createPortal(<OverlayContainer onClick={click} />, document.querySelector("body"));
};

export default Overlay;
