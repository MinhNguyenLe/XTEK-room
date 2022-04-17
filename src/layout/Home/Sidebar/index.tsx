import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { AppDispatch, AppState } from 'state'
import { useSelector, useDispatch } from 'react-redux'
import { setAccount, setShowMenu } from 'state/stream/actions'

import Desktop from './Desktop'
import Mobile from './Mobile'
import MenuWhenHidden from './MenuWhenHidden'

const Sidebar: React.FC = () => {
  return (
    <>
      <Desktop />
      <MenuWhenHidden />
      <Mobile />
    </>
  )
}

export default Sidebar
