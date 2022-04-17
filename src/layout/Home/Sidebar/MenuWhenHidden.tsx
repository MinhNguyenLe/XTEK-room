/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
import { ItemLinkMobileShape, OnlyShowMobile, Show, IconStart, ItemLinkMobileBorder } from './shared'

const MenuWhenHidden: React.FC = () => {
  const menuIsShow = useSelector<AppState, AppState['stream']['menuIsShow']>((state) => state.stream.menuIsShow)
  const dispatch = useDispatch<AppDispatch>()
  const menu = useSelector<AppState, AppState['stream']['menu']>((state) => state.stream.menu)

  const toggleMenu = () => {
    dispatch(setShowMenu({ isShow: !menuIsShow }))
  }

  return (
    <OnlyShowMobile>
      {!menuIsShow && (
        <Show>
          <ItemLinkMobileShape
            onClick={(e) => {
              e.preventDefault()
              toggleMenu()
            }}
          >
            <IconArrowRight />
          </ItemLinkMobileShape>
        </Show>
      )}
    </OnlyShowMobile>
  )
}

export default MenuWhenHidden
