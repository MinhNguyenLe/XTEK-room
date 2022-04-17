import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AppDispatch, AppState } from 'state'
import { useSelector, useDispatch } from 'react-redux'
import { setAccount, setShowMenu } from 'state/stream/actions'
import Overlay from 'components/Battlefi/Overlay'

import Menu from './Menu'

import { ContainerMobile, MobileOverlay } from './shared'

const Mobile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  const menuIsShow = useSelector<AppState, AppState['stream']['menuIsShow']>((state) => state.stream.menuIsShow)

  return (
    <>
      {menuIsShow && (
        <ContainerMobile>
          <Menu />
        </ContainerMobile>
      )}
      {menuIsShow && <Overlay click={() => dispatch(setShowMenu({ isShow: false }))} />}
    </>
  )
}

export default Mobile
