import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  width: 18px;
`

const IconEye = () => {
  return (
    <Svg version="1.1" id="Icons" x="0px" y="0px" viewBox="0 0 32 32" xmlSpace="preserve">
      <path
        fill="none"
        stroke="rgba(255, 255, 255, 0.35)"
        strokeWidth={2}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M29,16c0,0-5.8,8-13,8S3,16,3,16s5.8-8,13-8S29,16,29,16z"
      />
      <circle
        fill="none"
        stroke="rgba(255, 255, 255, 0.35)"
        strokeWidth={2}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        cx="16"
        cy="16"
        r="4"
      />
    </Svg>
  )
}

export default IconEye
