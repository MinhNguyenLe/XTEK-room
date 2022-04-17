import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Footer from './Footer'
import TabInteraction from './TabInteraction'
import Topbar from './Topbar'

const LayoutRoot = styled.div`
  position: relative;
  padding-top: 60px;
  display: flex;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: hidden;
  height: 100vh;
  ::-webkit-scrollbar {
    display: none;
  }
`

const Body = styled.div`
  display: flex;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: scroll;
`

const RootContainer = styled.div``

const LayoutHome = ({ children }) => {
  return (
    <RootContainer>
      <Topbar />
      <LayoutRoot>
        <Body>
          <Sidebar />
          <Content>
            {children}
            <Footer />
          </Content>
          <TabInteraction />
        </Body>
      </LayoutRoot>
    </RootContainer>
  )
}

export default LayoutHome
