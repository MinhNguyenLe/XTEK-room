import React from 'react'
import styled from 'styled-components'

const AvatarStyled = styled.div<{ img: string; width?: string; height?: string }>`
  cursor: pointer;
  width: ${({ width }) => width || '40px'};
  height: ${({ height }) => height || '40px'};
  background: url('${({ img }) => img}');
  background-size: cover;

  @media screen and (max-width: 980px) {
    width: ${({ width }) => width || '32px'};
    height: ${({ height }) => height || '32px'};
  } ;
`

const StageAvatarStyled = styled(AvatarStyled)<{ stageColor?: string }>`
  position: relative;
  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    background: ${({ stageColor }) => stageColor || '#9FD805'};
    border: 1px solid #16171b;
    border-radius: 50%;
    width: 9px;
    height: 9px;
  }
`

interface AvatarProps {
  img: string
  width?: string
  height?: string
  stageColor?: string
}

const Avatar: React.FC<AvatarProps> = ({ img, width, height, stageColor }) => {
  return (
    <>
      {stageColor ? (
        <StageAvatarStyled stageColor={stageColor} img={img} width={width} height={height} />
      ) : (
        <AvatarStyled img={img} width={width} height={height} />
      )}
    </>
  )
}
export default Avatar
