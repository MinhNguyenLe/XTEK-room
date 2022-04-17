/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AppDispatch, AppState } from 'state'
import { useSelector, useDispatch } from 'react-redux'
import { setAccount, setShowMenu } from 'state/stream/actions'
import useToast from 'hooks/useToast'
import Search from 'components/Battlefi/Search'

import UserMenu from '../../../components/Menu/UserMenu'
import useEagerConnect from '../../../hooks/useEagerConnect'

const Container = styled.div`
  position: fixed;
  left: 50%;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 980;
  background: #212327;
  backdrop-filter: blur(10px);
`

const GroupMenu = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Item = styled.div`
  width: 100%;
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
  @media screen and (max-width: 1048px) {
    padding: 10px 16px;
  }
  @media screen and (max-width: 980px) {
    font-size: 12px;
  }
  @media screen and (max-width: 800px) {
    margin: 0;
    font-family: Saira;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 10px 24px;
    color: #ffffff;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    background: #000000;
    min-width: 160px;
    justify-content: flex-end;
    :hover {
      border: 1px solid transparent;
      border-image: linear-gradient(rgba(255, 255, 255, 0), rgba(242, 131, 0, 1), rgba(255, 255, 255, 0));
      border-image-slice: 1;
      color: #f28300;
    }
  }
  border: 1px solid transparent;
  :hover {
    border-image: linear-gradient(rgba(255, 255, 255, 0), rgba(242, 131, 0, 1), rgba(255, 255, 255, 0));
    border-image-slice: 1;
    color: #f28300;
  }
`

const ItemLink = styled(Link)`
  white-space: nowrap;
  width: 100%;
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
  @media screen and (max-width: 1048px) {
    padding: 10px 16px;
  }
  @media screen and (max-width: 980px) {
    font-size: 12px;
  }
  @media screen and (max-width: 800px) {
    margin: 0;
    font-family: Saira;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 10px 24px;
    color: #ffffff;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    background: #000000;
    min-width: 160px;
    justify-content: flex-end;
    :hover {
      border: 1px solid transparent;
      border-image: linear-gradient(rgba(255, 255, 255, 0), rgba(242, 131, 0, 1), rgba(255, 255, 255, 0));
      border-image-slice: 1;
      color: #f28300;
    }
  }
  border: 1px solid transparent;
  :hover {
    border-image: linear-gradient(rgba(255, 255, 255, 0), rgba(242, 131, 0, 1), rgba(255, 255, 255, 0));
    border-image-slice: 1;
    color: #f28300;
  }
`

const ItemSignIn = styled(Link)`
  white-space: nowrap;
  width: 100%;
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
  background: #f28300;
  border-radius: 20px;
  @media screen and (max-width: 1048px) {
    padding: 10px 16px;
  }
  @media screen and (max-width: 980px) {
    font-size: 12px;
  }
  border: 1px solid transparent;
  :hover {
    border: 1px solid #f28300;
    color: #f28300;
    background: transparent;
  }
`

const Logo = styled(Link)`
  padding-right: 23px;
  white-space: nowrap;
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
  @media screen and (max-width: 800px) {
    padding-right: 12px;
  }
`

const LayoutPC = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Size = styled.div`
  padding: 6px 20px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
`

const Auth = styled.div`
  display: flex;
  align-items: center;
`

const Avatar = styled.div<{ img: string }>`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: url('${({ img }) => img}');
  background-size: cover;
  @media screen and (max-width: 980px) {
    width: 32px;
    height: 32px;
  }
`

const LayoutMobileMenu = styled.div`
  @media screen and (min-width: 1201px) {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    align-items: center;
    position: relative;
  }
`

const LayoutMobileAuth = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: relative;
`

const Svg = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

const Column = styled.div`
  @media screen and (min-width: 801px) {
    display: none;
  }
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 100%;
    right: 0;
  }
`

const Desktop = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 100%;
  right: -20px;
  background: rgb(0, 0, 0);
  overflow: hidden;
  white-space: nowrap;
`

const UserMenuWrapper = styled.div`
  margin-right: 1rem;
`

const Topbar: React.FC = () => {
  const [showMenuAuth, setShowMenuAuth] = useState(false)

  const menuIsShow = useSelector<AppState, AppState['stream']['menuIsShow']>((state) => state.stream.menuIsShow)

  const { toastSuccess, toastError } = useToast()

  const menu = useRef<null | any>(null)
  const auth = useRef<null | any>(null)

  const dispatch = useDispatch<AppDispatch>()

  const toggleMenu = () => {
    dispatch(setShowMenu({ isShow: !menuIsShow }))
  }

  const toggleMenuAuth = () => {
    setShowMenuAuth(!showMenuAuth)
  }
  const token = useSelector<AppState, AppState['stream']['token']>((state) => state.stream.token)

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menu.current && !menu.current.contains(event.target)) {
  //       dispatch(setShowMenu({isShow:false}))
  //     }
  //     if (auth.current && !auth.current.contains(event.target)) {
  //       setShowMenuAuth(false);
  //     }
  //   };
  //   document.addEventListener('click', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

  const logout = () => {
    localStorage.removeItem('jwt_access_token')
    dispatch(
      setAccount({
        account: {
          id: '',
          username: '',
          primaryEmail: '',
          firstname: '',
          lastname: '',
          createdAt: '',
          updatedAt: '',
          channel: {
            title: '',
            desc: '',
          },
        },
      }),
    )
    toastSuccess('Success', 'Successful: Log out!')

    window.location.reload()
  }

  useEagerConnect()

  return (
    <Container>
      <Size>
        <LayoutPC>
          <GroupMenu>
            <Logo to="/">LOGO LIVESTREAM</Logo>
          </GroupMenu>
          <Auth>
            <Search />
            {token ? (
              <UserMenuWrapper>
                <UserMenu />
              </UserMenuWrapper>
            ) : null}
            {!token && <ItemSignIn to="/sign-in">SIGN IN/SIGN UP</ItemSignIn>}
          </Auth>
        </LayoutPC>
        <LayoutMobileAuth>
          {token && <Avatar ref={auth} onClick={toggleMenuAuth} img="/images/live-stream/AVT (1).png" />}
          {showMenuAuth && (
            <Column>
              {!token ? (
                <ItemSignIn to="/sign-in">SIGN IN/SIGN UP</ItemSignIn>
              ) : (
                <>
                  <ItemLink onClick={logout} to="/sign-in">
                    LOG OUT
                  </ItemLink>
                  <ItemLink to="/profile">MY PROFILE</ItemLink>
                </>
              )}
            </Column>
          )}
          {showMenuAuth && token ? (
            <Desktop>
              {token && (
                <>
                  <Item onClick={logout}>LOG OUT</Item>
                  <ItemLink to="/profile">MY PROFILE</ItemLink>
                </>
              )}
            </Desktop>
          ) : null}
        </LayoutMobileAuth>
      </Size>
    </Container>
  )
}

export default Topbar
