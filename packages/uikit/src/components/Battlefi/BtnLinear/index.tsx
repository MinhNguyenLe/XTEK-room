import React from "react";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import useTheme from "hooks/useTheme";
import { Link } from "react-router-dom";

const Layout = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Btn = styled.button<{
  noWrapText?: boolean;
  isActive: boolean;
  isLast?: boolean;
  width?: string;
  height?: string;
}>`
  color: ${(props) => (props.isActive ? "#F28300" : "white")};
  background: ${(props) => (props.isActive ? "transparent" : "#18181B")};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  order: 1;
  width: 100%;
  flex-grow: 1;
  margin-right: ${(props) => (props.isLast ? "0px" : "12px")};
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  border: 1px solid transparent;
  border-image: linear-gradient(rgba(255, 255, 255, 0), rgba(242, 131, 0, 1), rgba(255, 255, 255, 0));
  border-image-slice: 1;
  white-space: ${(props) => props.noWrapText && "nowrap"};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  :disabled {
    background: #333;
    cursor: not-allowed;
  }
`;

const BtnLink = styled(Link)<{
  noWrapText?: boolean;
  isActive: boolean;
  isLast?: boolean;
  width?: string;
  height?: string;
}>`
  color: ${(props) => (props.isActive ? "#F28300" : "white")};
  background: ${(props) => (props.isActive ? "transparent" : "#18181B")};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  order: 1;
  flex-grow: 1;
  margin-right: ${(props) => (props.isLast ? "0px" : "12px")};
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  border: 1px solid transparent;
  border-image: linear-gradient(rgba(255, 255, 255, 0), rgba(242, 131, 0, 1), rgba(255, 255, 255, 0));
  border-image-slice: 1;
  white-space: ${(props) => props.noWrapText && "nowrap"};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
`;

interface BtnLinearProps {
  text: string;
  isLast?: boolean;
  isActive: boolean;
  noWrapText?: boolean;
  width?: string;
  height?: string;
  typeBtn?: string;
  linkTo?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const BtnLinear: React.FC<BtnLinearProps> = ({
  linkTo,
  noWrapText,
  text,
  isLast,
  isActive,
  width,
  height,
  typeBtn,
  type,
  onClick,
}) => {
  const checkTypeBtn = () => {
    if (typeBtn === "link")
      return (
        <BtnLink
          to={linkTo}
          width={width}
          height={height}
          onClick={onClick}
          noWrapText={noWrapText}
          isLast={isLast}
          isActive={isActive}
        >
          {text}
        </BtnLink>
      );
    return (
      <Btn
        type={type}
        width={width}
        height={height}
        noWrapText={noWrapText}
        onClick={onClick}
        isLast={isLast}
        isActive={isActive}
      >
        {text}
      </Btn>
    );
  };
  return <>{checkTypeBtn()}</>;
};

export default BtnLinear;
