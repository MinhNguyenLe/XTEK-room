import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AppDispatch, AppState } from 'state'
import { useSelector, useDispatch } from 'react-redux'
import { setAccount, setShowMenu } from 'state/stream/actions'
import useToast from 'hooks/useToast'
import Avatar from 'components/Battlefi/Avatar'
import IconArrowRight from 'components/Battlefi/Icon/IconArrowRight'
import IconArrowLeft from 'components/Battlefi/Icon/IconArrowLeft'
import {
  IconStart,
  Icon,
  ItemLink,
  ItemText,
  ColumnFullWidth,
  Size,
  Row,
  Block,
  BlockText,
  Recommend,
  ShowMobile,
} from './shared'

const Menu: React.FC = () => {
  const menuIsShow = useSelector<AppState, AppState['stream']['menuIsShow']>((state) => state.stream.menuIsShow)
  const dispatch = useDispatch<AppDispatch>()
  const menu = useSelector<AppState, AppState['stream']['menu']>((state) => state.stream.menu)

  const toggleMenu = () => {
    dispatch(setShowMenu({ isShow: !menuIsShow }))
  }

  return (
    <Size>
      <ColumnFullWidth>
        <Recommend>
          <BlockText>RECOMMENDED</BlockText>
          <ShowMobile onClick={toggleMenu}>
            <IconArrowLeft />
          </ShowMobile>
        </Recommend>
        <ItemLink to="/">
          <Row>
            <Avatar width="14px" height="14px" img="/images/live-stream/shape.png" />
            <ItemText>HOME</ItemText>
          </Row>
        </ItemLink>
        <Block>
          <BlockText>FAVORITE GAME</BlockText>
        </Block>
        {menu && menu.length
          ? menu.map((menuItem) => (
              <ItemLink to={`/game-detail/${menuItem.id}`} key={`menu-item-${menuItem.id}`}>
                <Row>
                  <Avatar width="27px" height="27px" img={`/${menuItem.iconUrl}`} />
                  <ItemText>{menuItem.name}</ItemText>
                </Row>
                <IconStart />
              </ItemLink>
            ))
          : null}
      </ColumnFullWidth>
    </Size>
  )
}

export default Menu
