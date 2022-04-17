/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled from 'styled-components'
import Avatar from 'components/Battlefi/Avatar'
import { Comment } from '../types'
import { Title, TextComment, LayoutListComment, ContentRight, LayoutRight } from '../shared'

const CommentLeft: React.FC<Comment> = ({ title, comments }) => {
  return (
    <LayoutRight>
      <LayoutListComment>
        {comments && comments.length
          ? comments.map((comment, index) => (
              <ContentRight key={index}>
                <div style={{ display: 'flex', alignItems: 'center' }}>{!index && <Title>{title}</Title>}</div>
                <TextComment>{comment}</TextComment>
              </ContentRight>
            ))
          : null}
      </LayoutListComment>
      <div style={{ marginLeft: 8 }}>
        <Avatar img="/images/live-stream/AVT (1).png" />
      </div>
    </LayoutRight>
  )
}
export default CommentLeft
