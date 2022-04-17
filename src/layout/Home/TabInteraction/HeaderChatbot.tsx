import IconArrowRight from 'components/Battlefi/Icon/IconArrowRight'
import React, { useState } from 'react'
import { setShowChatbot, changeTab } from 'state/stream/actions'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, AppState } from 'state'
import { Header, BlockText, ShowMobile } from './shared'

const HeaderChatbot = () => {
  const chatbotIsShow = useSelector<AppState, AppState['stream']['chatbotIsShow']>(
    (state) => state.stream.chatbotIsShow,
  )
  const toggleMenu = () => {
    dispatch(setShowChatbot({ isShow: !chatbotIsShow }))
  }

  const dispatch = useDispatch<AppDispatch>()

  return (
    <Header>
      <ShowMobile onClick={toggleMenu}>
        <IconArrowRight />
      </ShowMobile>
      <BlockText>CHAT BOT</BlockText>
    </Header>
  )
}

export default HeaderChatbot
