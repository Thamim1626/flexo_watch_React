import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  width: 90%;
`

export const VidoeCardTitle = styled.h1`
  width: 90%;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
