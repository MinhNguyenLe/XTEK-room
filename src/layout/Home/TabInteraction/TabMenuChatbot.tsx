import IconArrowRight from 'components/Battlefi/Icon/IconArrowRight'
import React, { useState } from 'react'
import { setShowChatbot, changeTab } from 'state/stream/actions'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, AppState } from 'state'
import Overlay from 'components/Battlefi/Overlay'
import TabConnect from './TabConnect'
import TabFriend from './TabFriend'
import TabPublic from './TabPublic'
import {
  LayoutMobile,
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

const TabMenuChatbot = () => {
  const chatbotIsShow = useSelector<AppState, AppState['stream']['chatbotIsShow']>(
    (state) => state.stream.chatbotIsShow,
  )
  const tab = useSelector<AppState, AppState['stream']['tab']>((state) => state.stream.tab)
  const toggleMenu = () => {
    dispatch(setShowChatbot({ isShow: !chatbotIsShow }))
  }

  const dispatch = useDispatch<AppDispatch>()
  return (
    <TabMenu>
      <LayoutMenuItem target={tab === 'public'} onClick={() => dispatch(changeTab({ tab: 'public' }))}>
        <MenuItem target={tab === 'public'}>Public</MenuItem>
      </LayoutMenuItem>
      <LayoutMenuItem target={tab === 'connect'} onClick={() => dispatch(changeTab({ tab: 'connect' }))}>
        <MenuItem target={tab === 'connect'}>CS</MenuItem>
      </LayoutMenuItem>
      <LayoutMenuItem target={tab === 'friend'} onClick={() => dispatch(changeTab({ tab: 'friend' }))}>
        <MenuItem target={tab === 'friend'}>Friendlist</MenuItem>
      </LayoutMenuItem>
    </TabMenu>
  )
}

export default TabMenuChatbot
