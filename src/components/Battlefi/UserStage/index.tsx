import React from 'react'
import styled from 'styled-components'
import Search from '../Search'
import Avatar from '../Avatar'

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  margin: 6px 0;
`

const Name = styled.span`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-left: 12px;
`

const UserStage = () => {
  return (
    <Container>
      <Avatar width="36px" height="36px" stageColor="#9FD805" img="/images/live-stream/AVT (1).png" />
      <Name>Dianne Russell</Name>
    </Container>
  )
}

export default UserStage
