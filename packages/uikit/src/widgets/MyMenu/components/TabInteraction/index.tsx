import React from "react";
import styled from "styled-components";

import { ContainerRightBar } from "../../../../theme/battlefi/shared-style";

import TabAction from "./TabAction";
import TabContent from "./TabContent";

const TabInteraction = () => {
  return (
    <ContainerRightBar>
      <TabAction />
      <TabContent />
    </ContainerRightBar>
  );
};
export default TabInteraction;
