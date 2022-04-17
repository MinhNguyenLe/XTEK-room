import React from "react";
import styled from "styled-components";

import { FONT_STYLE, FONT_FAMILY } from "../../../../theme/battlefi/variables";
import { Row } from "../../../../theme/battlefi/shared-style";

import TabItem from "./TabItem";

const Svg = styled.svg``;

const Text = styled.span`
  font-family: ${FONT_FAMILY};
  font-style: ${FONT_STYLE};
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #e2dfdf;
`;

const Container = styled(Row)`
  width: 100%;
`;

const TabAction = () => {
  return (
    <Container>
      <TabItem />
      <TabItem />
      <TabItem />
    </Container>
  );
};

export default TabAction;
