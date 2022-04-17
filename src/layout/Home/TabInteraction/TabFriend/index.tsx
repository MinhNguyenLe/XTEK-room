import React from 'react'
import styled from 'styled-components'
import Search from 'components/Battlefi/Search'
import Avatar from 'components/Battlefi/Avatar'
import UserStage from 'components/Battlefi/UserStage'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 11px;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Btn = styled.div`
  white-space: nowrap;
  width: 100%;
  font-family: Saira;
  font-style: normal;
  margin: 4px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 23px;
  cursor: pointer;
  border-radius: 20px;
  @media screen and (max-width: 1048px) {
    padding: 10px 16px;
  }
  @media screen and (max-width: 980px) {
    font-size: 12px;
  }
`

const BtnConnect = styled(Btn)`
  color: #ffffff;
  background: #f28300;
  border: 1px solid transparent;
`

const BtnInvite = styled(Btn)`
  border: 1px solid #f28300;
  color: #f28300;
  background: transparent;
`

const TabFriend = () => {
  return (
    <Container>
      <Header>
        <Search mr="0px" width="100%" minWidth="200px" bg="rgba(255, 255, 255, 0.1)" />
        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', width: '100%' }}>
          <UserStage />
          <UserStage />
          <UserStage />
          <UserStage />
          <UserStage />
          <UserStage />
          <UserStage />
          <UserStage />
          <UserStage />
        </div>
      </Header>
      <Footer>
        <BtnInvite>CONNECT WITH STEAM</BtnInvite>
        <BtnConnect>INVITE FRIENDS TO JOIN</BtnConnect>
      </Footer>
    </Container>
  )
}

export default TabFriend
