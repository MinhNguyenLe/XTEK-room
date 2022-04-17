import styled from "styled-components";
import { Row } from "../../../../theme/battlefi/shared-style";
import { FONT_STYLE, FONT_FAMILY } from "../../../../theme/battlefi/variables";

const Logo = styled.img`
  width: 42;
  margin-right: 8px;
`;

const Start = styled.svg`
  width: 20;
`;

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

const Score = styled.span`
  font-family: ${FONT_FAMILY};
  font-style: ${FONT_STYLE};
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #e2dfdf;
  margin-right: 6px;
`;

const Container = styled(Row)`
  align-items: center;
  justify-content: space-between;
  margin: 18px 0;
`;

const ItemSidebar = () => {
  return (
    <Container>
      <Row>
        <Logo alt="" src="/images/battlefi/sidebar-logo-1.png" />
        <Text>Age Of Empires 2</Text>
      </Row>
      <Row>
        <Score>12</Score>
        <Start width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
            fill="#EE4296"
          />
        </Start>
      </Row>
    </Container>
  );
};
export default ItemSidebar;
