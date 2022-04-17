import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  width: 18px;
`;

const IconLock = () => {
  return (
    <Svg version="1.1" id="Layer_1_1_" x="0px" y="0px" viewBox="0 0 16 16" xmlSpace="preserve">
      <path
        fill="rgba(255, 255, 255, 0.35)"
        d="M8,0C5.239,0,3,2.239,3,5v1H2v10h12V6h-1V5C13,2.239,10.761,0,8,0z M9,11.723V14H7v-2.277C6.405,11.376,6,10.738,6,10
c0-1.105,0.895-2,2-2s2,0.895,2,2C10,10.738,9.595,11.376,9,11.723z M12,6H4V5c0-2.206,1.794-4,4-4s4,1.794,4,4V6z"
      />
    </Svg>
  );
};

export default IconLock;
