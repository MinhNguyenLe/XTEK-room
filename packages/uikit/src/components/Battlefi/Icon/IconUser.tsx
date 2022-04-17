import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  width: 18px;
`;

const IconUser = () => {
  return (
    <Svg version="1.1" id="Layer_1_1_" x="0px" y="0px" viewBox="0 0 16 16" xmlSpace="preserve">
      <path fill="rgba(255, 255, 255, 0.35)" d="M12,9H8H4c-2.209,0-4,1.791-4,4v3h16v-3C16,10.791,14.209,9,12,9z" />
      <path
        fill="rgba(255, 255, 255, 0.35)"
        d="M12,5V4c0-2.209-1.791-4-4-4S4,1.791,4,4v1c0,2.209,1.791,4,4,4S12,7.209,12,5z"
      />
    </Svg>
  );
};

export default IconUser;
