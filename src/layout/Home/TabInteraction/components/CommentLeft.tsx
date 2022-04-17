/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled from 'styled-components'
import Avatar from 'components/Battlefi/Avatar'
import { Comment } from '../types'
import StatusAction from './StatusAction'
import { Layout, Title, TextComment, LayoutListComment, Content } from '../shared'
import StatusWarning from './StatusWarning'

const CommentLeft: React.FC<Comment> = ({ title, comments, status }) => {
  const renderStatus = () => {
    if (status === 'action') return <StatusAction />
    if (status === 'warning') return <StatusWarning />
    return null
  }
  return (
    <Layout>
      <div style={{ marginRight: 8 }}>
        <Avatar img="/images/live-stream/AVT (1).png" />
      </div>
      <LayoutListComment>
        {comments && comments.length
          ? comments.map((comment, index) => (
              <Content key={index}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {!index && (
                    <>
                      <Title>{title}</Title>
                      {renderStatus()}
                    </>
                  )}
                </div>
                <TextComment>{comment}</TextComment>
              </Content>
            ))
          : null}
      </LayoutListComment>
    </Layout>
  )
}
export default CommentLeft
