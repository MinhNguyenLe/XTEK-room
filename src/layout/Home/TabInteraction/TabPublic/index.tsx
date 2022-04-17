import React from 'react'
import styled from 'styled-components'
import Chat from '../components/Chat'
import CommentLeft from '../components/CommentLeft'
import CommentRight from '../components/CommentRight'
import NotiStarted from '../components/NotiStarted'
import {
  Container,
  CountOnline,
  Online,
  Input,
  InputComment,
  ContentPublic,
  ListComment,
  ListNotiStarted,
  Icon,
} from '../shared'

const TabPublic = () => {
  return (
    <Container>
      <CountOnline>
        <div>
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
            <path
              d="M17.25 15C17.25 15.4142 17.5858 15.75 18 15.75C18.4142 15.75 18.75 15.4142 18.75 15H17.25ZM5.25 15C5.25 15.4142 5.58579 15.75 6 15.75C6.41421 15.75 6.75 15.4142 6.75 15H5.25ZM22.25 15C22.25 15.4142 22.5858 15.75 23 15.75C23.4142 15.75 23.75 15.4142 23.75 15H22.25ZM18.5 9.25C18.0858 9.25 17.75 9.58579 17.75 10C17.75 10.4142 18.0858 10.75 18.5 10.75V9.25ZM0.25 15C0.25 15.4142 0.585786 15.75 1 15.75C1.41421 15.75 1.75 15.4142 1.75 15H0.25ZM5.5 10.75C5.91421 10.75 6.25 10.4142 6.25 10C6.25 9.58579 5.91421 9.25 5.5 9.25V10.75ZM17 6.25C16.5858 6.25 16.25 6.58579 16.25 7C16.25 7.41421 16.5858 7.75 17 7.75V6.25ZM17 0.25C16.5858 0.25 16.25 0.585786 16.25 1C16.25 1.41421 16.5858 1.75 17 1.75V0.25ZM7 7.75C7.41421 7.75 7.75 7.41421 7.75 7C7.75 6.58579 7.41421 6.25 7 6.25V7.75ZM7 1.75C7.41421 1.75 7.75 1.41421 7.75 1C7.75 0.585786 7.41421 0.25 7 0.25V1.75ZM10 10.75H14V9.25H10V10.75ZM17.25 14V15H18.75V14H17.25ZM6.75 15V14H5.25V15H6.75ZM14 10.75C15.7949 10.75 17.25 12.2051 17.25 14H18.75C18.75 11.3766 16.6234 9.25 14 9.25V10.75ZM10 9.25C7.37665 9.25 5.25 11.3766 5.25 14H6.75C6.75 12.2051 8.20507 10.75 10 10.75V9.25ZM22.25 14V15H23.75V14H22.25ZM18.5 10.75H19V9.25H18.5V10.75ZM23.75 14C23.75 11.3766 21.6234 9.25 19 9.25V10.75C20.7949 10.75 22.25 12.2051 22.25 14H23.75ZM0.25 14V15H1.75V14H0.25ZM5.5 9.25H5V10.75H5.5V9.25ZM1.75 14C1.75 12.2051 3.20507 10.75 5 10.75V9.25C2.37665 9.25 0.25 11.3766 0.25 14H1.75ZM14.25 4C14.25 5.24264 13.2426 6.25 12 6.25V7.75C14.0711 7.75 15.75 6.07107 15.75 4H14.25ZM12 6.25C10.7574 6.25 9.75 5.24264 9.75 4H8.25C8.25 6.07107 9.92893 7.75 12 7.75V6.25ZM9.75 4C9.75 2.75736 10.7574 1.75 12 1.75V0.25C9.92893 0.25 8.25 1.92893 8.25 4H9.75ZM12 1.75C13.2426 1.75 14.25 2.75736 14.25 4H15.75C15.75 1.92893 14.0711 0.25 12 0.25V1.75ZM19.25 4C19.25 5.24264 18.2426 6.25 17 6.25V7.75C19.0711 7.75 20.75 6.07107 20.75 4H19.25ZM17 1.75C18.2426 1.75 19.25 2.75736 19.25 4H20.75C20.75 1.92893 19.0711 0.25 17 0.25V1.75ZM3.25 4C3.25 6.07107 4.92893 7.75 7 7.75V6.25C5.75736 6.25 4.75 5.24264 4.75 4H3.25ZM7 0.25C4.92893 0.25 3.25 1.92893 3.25 4H4.75C4.75 2.75736 5.75736 1.75 7 1.75V0.25Z"
              fill="white"
              fillOpacity="0.5"
            />
          </svg>
        </div>
        <Online>125,908 online</Online>
      </CountOnline>
      <ContentPublic>
        <ListComment>
          <CommentLeft
            status="action"
            title="Johny Wise"
            comments={['Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ']}
          />
          <CommentRight
            status="warning"
            title="Johny Wise"
            comments={['tempor incididunt ut labore !!', 'tempor incididunt ut labore !!']}
          />
        </ListComment>
        <ListNotiStarted>
          <NotiStarted color="#F28300" />
          <NotiStarted color="#9FD805" />
        </ListNotiStarted>
      </ContentPublic>
      <Chat />
    </Container>
  )
}

export default TabPublic
