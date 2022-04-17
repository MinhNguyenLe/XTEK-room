import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AppDispatch, AppState } from 'state'
import { useSelector, useDispatch } from 'react-redux'
import { setAccount, setShowMenu } from 'state/stream/actions'

import Menu from './Menu'

import { Container } from './shared'

const Desktop: React.FC = () => {
  return (
    <Container>
      <Menu />
    </Container>
  )
}

export default Desktop
