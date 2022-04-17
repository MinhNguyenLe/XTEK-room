import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  width: 25px;
`;

const Path = styled.path`
  fill: #f0b90b;
  stroke: #f0b90b;
`;

const IconBUSD = () => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336.41 337.42">
      <title>Asset 1</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <Path className="cls-1" d="M168.2.71l41.5,42.5L105.2,147.71l-41.5-41.5Z" />
          <Path className="cls-1" d="M231.2,63.71l41.5,42.5L105.2,273.71l-41.5-41.5Z" />
          <Path className="cls-1" d="M42.2,126.71l41.5,42.5-41.5,41.5L.7,169.21Z" />
          <Path className="cls-1" d="M294.2,126.71l41.5,42.5L168.2,336.71l-41.5-41.5Z" />
        </g>
      </g>
    </Svg>
  );
};

export default IconBUSD;
