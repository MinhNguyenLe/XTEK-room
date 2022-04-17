import React from "react";
import styled from "styled-components";

import { ContainerLeftBar } from "../../../../theme/battlefi/shared-style";

import ItemSidebar from "./Item";

const Sidebar = () => {
  return (
    <ContainerLeftBar>
      <ItemSidebar />
      <ItemSidebar />
      <ItemSidebar />
      <ItemSidebar />
    </ContainerLeftBar>
  );
};
export default Sidebar;
