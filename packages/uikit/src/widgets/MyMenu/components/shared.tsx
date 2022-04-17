import styled from "styled-components";
import { HEIGHT_NAVBAR, Z_INDEX_LOW, WIDTH_SIDE_BAR } from "../../../theme/battlefi/variables";

export const ContainerFrameLeft = styled.div`
  width: ${WIDTH_SIDE_BAR};
  min-width: ${WIDTH_SIDE_BAR};
  background: #403f3f;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.2);
  height: calc(100vh - ${HEIGHT_NAVBAR});
  z-index: ${Z_INDEX_LOW};
`;
export const ContainerFrameLRight = styled.div`
  width: ${WIDTH_SIDE_BAR};
  min-width: ${WIDTH_SIDE_BAR};
  background: #403f3f;
  box-shadow: -4px 0px 2px rgba(0, 0, 0, 0.2);
  height: calc(100vh - ${HEIGHT_NAVBAR});
  z-index: ${Z_INDEX_LOW};
`;
