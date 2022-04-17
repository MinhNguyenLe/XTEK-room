import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ItemLink = styled(Link)`
  white-space: nowrap;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  cursor: pointer;
  border-right: 1px solid transparent;
  color: #ffffff;
  padding: 10px;
  background: #16171b;
  :hover {
    border-image: linear-gradient(rgba(255, 255, 255, 0), rgba(242, 131, 0, 1), rgba(255, 255, 255, 0));
    background: #212327;
    border-image-slice: 1;
  }
  :hover span {
    color: #f28300;
  }
`

export const ItemLinkMobile = styled(Link)`
  white-space: nowrap;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border-right: 1px solid transparent;
  color: #ffffff;
  padding: 10px 0;
  background: #16171b;
  :hover {
    border-image: linear-gradient(rgba(255, 255, 255, 0), rgba(242, 131, 0, 1), rgba(255, 255, 255, 0));
    background: #212327;
    border-image-slice: 1;
  }
  :hover span {
    color: #f28300;
  }
`

export const ItemLinkMobileBorder = styled(ItemLinkMobile)`
  border-bottom: 1px solid #3a3b3d;
`

export const ItemLinkMobileShape = styled.div`
  border-radius: 50%;
  white-space: nowrap;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  margin-top: 8px;
  margin-left: 8px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  :hover {
    background: #212327;
  }
`

export const ItemText = styled.span`
  font-family: 'Saira';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 147.4%;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-left: 4px;
`

export const ColumnFullWidth = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Size = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
`

export const Icon = styled.div``

export const Row = styled.div`
  display: flex;
  align-items: center;
`

export const Block = styled.div`
  white-space: nowrap;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 10px 0;
  border-right: 1px solid transparent;
  color: #ffffff;
  padding: 10px;
  background: #16171b;
  border-top: 1px solid #3a3b3d;
  border-bottom: 1px solid #3a3b3d;
`

export const BlockText = styled.div`
  font-family: 'Saira';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 147.4%;
  display: flex;
  align-items: center;
  color: #ffffff;
`

export const Recommend = styled.div`
  white-space: nowrap;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 10px 0;
  border-right: 1px solid transparent;
  color: #ffffff;
  padding: 10px;
  background: #16171b;
  border-bottom: 1px solid #3a3b3d;
`

export const ShowMobile = styled.div`
  cursor: pointer;
  @media screen and (min-width: 1201px) {
    display: none;
  }
`

export const OnlyShowMobile = styled.div`
  @media screen and (min-width: 1201px) {
    display: none;
  }
`

export const Show = styled.div`
  background: transparent;
  position: absolute;
  width: 40px;
  min-width: 40px;
  // height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  z-index: 10;
`

export const ContainerMobile = styled.div`
  @media screen and (min-width: 1201px) {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 168px;
    padding-top: 60px;
    min-width: 168px;
    background: #16171b;
    z-index: 995;
    height: 100vh;
  }
`

export const MobileOverlay = styled.div`
  @media screen and (min-width: 1201px) {
    display: none;
  }
`

export const Container = styled.div`
  width: 168px;
  min-width: 168px;
  background: #16171b;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`

export const IconStart = () => {
  return (
    <Icon>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M7 10.3333L7.33541 9.66251C7.12426 9.55694 6.87574 9.55694 6.66459 9.66251L7 10.3333ZM3 12.3333L2.27239 12.1514C2.20136 12.4356 2.30223 12.7351 2.5307 12.9184C2.75918 13.1016 3.07344 13.1351 3.33541 13.0042L3 12.3333ZM4 8.33333L4.72761 8.51523C4.7881 8.27325 4.72433 8.01701 4.55747 7.83161L4 8.33333ZM1 5L0.942478 4.25221C0.657545 4.27413 0.40983 4.45606 0.30367 4.72139C0.19751 4.98671 0.251357 5.28931 0.442529 5.50172L1 5ZM5.33333 4.66667L5.39086 5.41446C5.66342 5.39349 5.90299 5.22588 6.01611 4.97702L5.33333 4.66667ZM7 1L7.68278 0.689648C7.56107 0.421902 7.29411 0.25 7 0.25C6.70589 0.25 6.43893 0.421902 6.31723 0.689648L7 1ZM8.66667 4.66667L7.98389 4.97702C8.09701 5.22588 8.33658 5.39349 8.60914 5.41446L8.66667 4.66667ZM13 5L13.5575 5.50172C13.7486 5.28931 13.8025 4.98671 13.6963 4.72139C13.5902 4.45606 13.3425 4.27413 13.0575 4.25221L13 5ZM10 8.33333L9.44253 7.83161C9.27567 8.01701 9.2119 8.27325 9.27239 8.51523L10 8.33333ZM11 12.3333L10.6646 13.0042C10.9266 13.1351 11.2408 13.1016 11.4693 12.9184C11.6978 12.7351 11.7986 12.4356 11.7276 12.1514L11 12.3333ZM6.66459 9.66251L2.66459 11.6625L3.33541 13.0042L7.33541 11.0042L6.66459 9.66251ZM3.72761 12.5152L4.72761 8.51523L3.27239 8.15143L2.27239 12.1514L3.72761 12.5152ZM4.55747 7.83161L1.55747 4.49828L0.442529 5.50172L3.44253 8.83506L4.55747 7.83161ZM1.05752 5.74779L5.39086 5.41446L5.27581 3.91888L0.942478 4.25221L1.05752 5.74779ZM6.01611 4.97702L7.68278 1.31035L6.31723 0.689648L4.65056 4.35631L6.01611 4.97702ZM6.31723 1.31035L7.98389 4.97702L9.34944 4.35631L7.68278 0.689648L6.31723 1.31035ZM8.60914 5.41446L12.9425 5.74779L13.0575 4.25221L8.72419 3.91888L8.60914 5.41446ZM12.4425 4.49828L9.44253 7.83161L10.5575 8.83506L13.5575 5.50172L12.4425 4.49828ZM9.27239 8.51523L10.2724 12.5152L11.7276 12.1514L10.7276 8.15143L9.27239 8.51523ZM11.3354 11.6625L7.33541 9.66251L6.66459 11.0042L10.6646 13.0042L11.3354 11.6625Z"
          fill="white"
        />
      </svg>
    </Icon>
  )
}
