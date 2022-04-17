import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Title = styled.span`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-right: 4px;
`

export const TextComment = styled.span`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: rgba(255, 255, 255, 0.5);
`

export const LayoutListComment = styled.div`
  display: flex;
  flex-direction: column;
`

export const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 6px 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #212327;
  border-radius: 8px;
  padding: 5px;
  margin: 4px 0;
`
export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background: #212327;
  border-radius: 8px;
  padding: 5px;
  margin: 4px 0;
`

export const LayoutRight = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin: 6px 0;
`

export const LayoutNotiStarted = styled.div<{ color: string }>`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  border-radius: 16px;
  width: 100%;
  border-top: 1px solid ${(props) => props.color};
  border-left: 1px solid ${(props) => props.color};
  border-right: 1px solid ${(props) => props.color};
  margin: 4px 0;
`

export const Text = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`

export const TextUnderline = styled.span<{ color: string }>`
  color: ${(props) => props.color};
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`

export const CountOnline = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
`

export const Online = styled.span`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #808191;
  margin-left: 8px;
`

export const Input = styled.input`
  background: transparent;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.35);
  margin: 0 16px;
  border: none;
  outline: none;
  box-shadow: none;
  &:focus {
    border: none;
  }
  color: rgba(255, 255, 255, 0.5);
  width: 100%;
`

export const InputComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #18181b;
  background: #212327;
  border-radius: 8px;
  padding: 16px 12px 20px 0;
  width: 100%;
  margin-top: 12px;
`

export const ContentPublic = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const ListComment = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
`

export const ListNotiStarted = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 6px;
`

export const Icon = styled.div`
  margin: 0 6px;
  cursor: pointer;
`

export const Show = styled.div`
  // background: #16171B;
  position: absolute;
  width: 40px;
  min-width: 40px;
  // height:100vh;
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  margin-top: 8px;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  right: 0;
`

export const MobileOverlay = styled.div`
  @media screen and (min-width: 1201px) {
    display: none;
  }
`

export const ItemLinkMobile = styled.div`
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
    background: #212327;
  }
`

export const ItemLinkMobileBorder = styled(ItemLinkMobile)`
  border-bottom: 1px solid #3a3b3d;
`

export const ItemLinkMobileShape = styled.div`
  white-space: nowrap;
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  :hover {
    background: #212327;
  }
`

export const LayoutMobile = styled.div`
  @media screen and (min-width: 1201px) {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    z-index: 995;
    position: absolute;
    bottom: 0;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    width: 280px;
    min-width: 280px;
    background: #16171b;
    right: 0;
  }
`

export const TabContent = styled.div`
  padding: 14px 10px;
  height: 100%;
`

export const TabMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const MenuItem = styled.span<{ target: boolean }>`
  font-family: 'Saira';
  font-style: normal;
  font-weight: ${(props) => (props.target ? '600' : '400')};
  font-size: 14px;
  line-height: 147.4%;
  color: ${(props) => (props.target ? '#F28300' : '#ffffff')};
  text-decoration-line: ${(props) => props.target && 'underline'};
  padding: 10px 0;
`

export const LayoutMenuItem = styled.div<{ target: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: ${(props) => (props.target ? '#16171B' : '#212327')};
`

export const Header = styled.div`
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

export const ShowMobile = styled.div`
  cursor: pointer;
  @media screen and (min-width: 1201px) {
    display: none;
  }
`

export const LayoutDesktop = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  min-width: 280px;
  background: #16171b;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`

export const TitleQuestion = styled.span`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-bottom: 6px;
  margin-top: 8px;
`

export const AskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 18px;
  background: #1f1f23;
  border-radius: 5px;
`

export const Ask = styled.span`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`

export const AskActive = styled.span`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #ffffff;
`

export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 7px 12px;
  background: #1f1f23;
  cursor: pointer;
  border-radius: 0px 0px 5px 5px;
`
