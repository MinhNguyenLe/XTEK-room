import IconArrowRight from 'components/Battlefi/Icon/IconArrowRight'
import React, { useState } from 'react'
import { setShowChatbot, changeTab } from 'state/stream/actions'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, AppState } from 'state'
import Desktop from './Desktop'
import Mobile from './Mobile'
import ChatbotWhenHidden from './ChatbotWhenHidden'

const TabInteraction = () => {
  return (
    <>
      <Desktop />
      <ChatbotWhenHidden />
      <Mobile />
    </>
  )
}

export default TabInteraction
