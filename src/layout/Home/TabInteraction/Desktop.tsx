import IconArrowRight from 'components/Battlefi/Icon/IconArrowRight'
import React, { useState } from 'react'
import { setShowChatbot, changeTab } from 'state/stream/actions'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, AppState } from 'state'
import TabConnect from './TabConnect'
import TabFriend from './TabFriend'
import TabPublic from './TabPublic'
import {
  LayoutDesktop,
  TabContent,
  TabMenu,
  MenuItem,
  LayoutMenuItem,
  Header,
  BlockText,
  ShowMobile,
  MobileOverlay,
} from './shared'
import HeaderChatbot from './HeaderChatbot'
import TabMenuChatbot from './TabMenuChatbot'

const Desktop = () => {
  const chatbotIsShow = useSelector<AppState, AppState['stream']['chatbotIsShow']>(
    (state) => state.stream.chatbotIsShow,
  )
  const tab = useSelector<AppState, AppState['stream']['tab']>((state) => state.stream.tab)
  const toggleMenu = () => {
    dispatch(setShowChatbot({ isShow: !chatbotIsShow }))
  }

  const dispatch = useDispatch<AppDispatch>()

  const checkTab = () => {
    if (tab === 'public') {
      return <TabPublic />
    }
    if (tab === 'connect') {
      return <TabConnect />
    }
    if (tab === 'friend') {
      return <TabFriend />
    }
    return null
  }

  return (
    <LayoutDesktop>
      <HeaderChatbot />
      <TabMenuChatbot />
      <TabContent>{checkTab()}</TabContent>
    </LayoutDesktop>
  )
}

export default Desktop
