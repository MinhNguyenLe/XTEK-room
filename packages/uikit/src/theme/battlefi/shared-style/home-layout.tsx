import styled from "styled-components";
import { HEIGHT_NAVBAR, Z_INDEX_LOW, WIDTH_SIDE_BAR } from "../variables";

export const ContainerLeftBar = styled.div`
  width: ${WIDTH_SIDE_BAR};
  min-width: ${WIDTH_SIDE_BAR};
  background: #403f3f;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.2);
  height: calc(100vh - ${HEIGHT_NAVBAR});
  z-index: ${Z_INDEX_LOW};
  padding: 32px 10px;
`;
export const ContainerRightBar = styled.div`
  width: ${WIDTH_SIDE_BAR};
  min-width: ${WIDTH_SIDE_BAR};
  background: #403f3f;
  box-shadow: -4px 0px 2px rgba(0, 0, 0, 0.2);
  height: calc(100vh - ${HEIGHT_NAVBAR});
  z-index: ${Z_INDEX_LOW};
  padding: 32px 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
