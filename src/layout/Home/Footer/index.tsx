import React from 'react'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import { Link } from 'react-router-dom'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 160px;
  margin-bottom: 130px;
  width: 100%;
  @media screen and (max-width: 600px) {
    margin-top: 130px;
    margin-bottom: 100px;
  }
  @media screen and (max-width: 400px) {
    margin-top: 100px;
    margin-bottom: 70px;
  }
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 600px) {
    width: 100%;
  }
`

const Line = styled.div`
  background: rgba(255, 255, 255, 1);
  height: 1px;
  margin-top: 30px;
  margin-bottom: 27px;
  max-width: 800px;
  @media screen and (min-width: 1360px) {
    width: 100%;
  }
  @media screen and (max-width: 1360px) {
    width: 80%;
  }
  @media screen and (max-width: 650px) {
    width: calc(100% - 80px);
    margin-top: 18px;
    margin-bottom: 16px;
  }
  @media screen and (max-width: 4000px) {
    width: calc(100% - 40px);
  }
`

const Text = styled.span`
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  line-height: 13px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  @media screen and (min-width: 501px) {
    font-size: 14px;
  }
  @media screen and (max-width: 500px) {
    font-size: 8px;
  }
`

const GroupMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 650px) {
    width: calc(100% - 80px);
    justify-content: space-between;
  }
  @media screen and (max-width: 4000px) {
    width: calc(100% - 40px);
  }
`

const Logo = styled(Link)`
  cursor: pointer;
  font-family: Saira;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #f28300;
  @media screen and (min-width: 600px) {
    padding: 0 23px;
  }
  @media screen and (max-width: 599px) {
    line-height: normal;
    font-size: 12px;
  }
  @media screen and (max-width: 400px) {
    padding: 0 4px;
  }
`

const ItemLink = styled(Link)`
  font-family: Saira;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  padding: 10px 23px;
  cursor: pointer;
  border: 1px solid transparent;
  :hover {
    border-image: linear-gradient(rgba(255, 255, 255, 0), rgba(242, 131, 0, 1), rgba(255, 255, 255, 0));
    border-image-slice: 1;
    color: #f28300;
  }
  @media screen and (max-width: 560px) {
    padding: 6px 8px;
    font-size: 12px;
    line-height: normal;
  }
  @media screen and (max-width: 420px) {
    font-size: 10px;
    line-height: normal;
  }
  @media screen and (max-width: 400px) {
    padding: 0 4px;
  }
`

const Footer: React.FC = () => {
  const { theme } = useTheme()

  return (
    <Container>
      <Layout>
        <GroupMenu>
          <Logo to="/">LOGO</Logo>
          <ItemLink to="/">TEAM</ItemLink>
          <ItemLink to="/tournament">TOURNAMENT</ItemLink>
          <ItemLink to="/">BATTLES</ItemLink>
          <ItemLink to="/">LADDERS</ItemLink>
        </GroupMenu>
        <Line />
        <Text>Copyright © 2021. All Rights Reserved By BEGAM</Text>
      </Layout>
    </Container>
  )
}

export default Footer
