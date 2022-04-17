import React from 'react'
import styled from 'styled-components'
import { NotiStartedProps } from '../types'
import { LayoutNotiStarted, Text, TextUnderline } from '../shared'

const NotiStarted: React.FC<NotiStartedProps> = ({ color }) => {
  return (
    <LayoutNotiStarted color={color}>
      <div style={{ padding: 8 }}>
        <Text color={color}>
          <TextUnderline color={color}>Trung Le</TextUnderline> has started a challenge in DOTA. 100 tickets to{' '}
          <TextUnderline color={color}>join.</TextUnderline>
        </Text>
      </div>
    </LayoutNotiStarted>
  )
}

export default NotiStarted
