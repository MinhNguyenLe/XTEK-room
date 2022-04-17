/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import styled from 'styled-components'
import Chat from '../components/Chat'
import CommentLeft from '../components/CommentLeft'
import CommentRight from '../components/CommentRight'

import {
  Container,
  TitleQuestion,
  AskContainer,
  Ask,
  Question,
  ContentPublic,
  ListComment,
  AskActive,
  Icon,
} from '../shared'

const TabConnect = () => {
  const [showQuestion, setShowQuestion] = useState<boolean>(false)
  const toggleShowQuestion = () => {
    setShowQuestion(!showQuestion)
  }

  return (
    <Container>
      <div>
        <TitleQuestion>How can we help you ?</TitleQuestion>
        <div>
          <AskContainer>
            <Ask>Ask us any question </Ask>
            <div style={{ cursor: 'pointer' }} onClick={toggleShowQuestion}>
              {showQuestion ? (
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path
                    d="M6 0.625C5.8125 0.625 5.625 0.7 5.475 0.85L0.225 6.1C-0.075 6.4 -0.075 6.85 0.225 7.15C0.525 7.45 0.975 7.45 1.275 7.15L6 2.425L10.725 7.15C11.025 7.45 11.475 7.45 11.775 7.15C12.075 6.85 12.075 6.4 11.775 6.1L6.525 0.85C6.375 0.7 6.1875 0.625 6 0.625Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
              ) : (
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path
                    d="M6 7.375C5.8125 7.375 5.625 7.3 5.475 7.15L0.225 1.9C-0.075 1.6 -0.075 1.15 0.225 0.85C0.525 0.55 0.975 0.55 1.275 0.85L6 5.575L10.725 0.85C11.025 0.55 11.475 0.55 11.775 0.85C12.075 1.15 12.075 1.6 11.775 1.9L6.525 7.15C6.375 7.3 6.1875 7.375 6 7.375Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
              )}
            </div>
          </AskContainer>
          {showQuestion && (
            <>
              <Question>
                <Ask>How can I create a livestream ?</Ask>
              </Question>
              <Question>
                <AskActive>What kind of livestream which I can create ?</AskActive>
              </Question>
            </>
          )}
        </div>
      </div>
      <ContentPublic>
        <ListComment>
          <CommentLeft
            status="action"
            title="Customer Support"
            comments={['tempor incididunt ut labore !!', 'Amet minim mollit non deserunt ullt.']}
          />
          <CommentRight
            status="warning"
            title="Johny Wise"
            comments={['What kind of livestream which I can create ?']}
          />
        </ListComment>
      </ContentPublic>
      <Chat />
    </Container>
  )
}

export default TabConnect
