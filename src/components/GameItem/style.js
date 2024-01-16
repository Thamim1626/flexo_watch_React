import styled from 'styled-components'

export const GameItems = styled.div`
  width: 90%;
  max-width: 500px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 45%;
  }

  @media (min-width: 992px) {
    width: 30%;
  }
`

export const GameImage = styled.img`
  width: 100%;
`
export const GameHeading = styled.h2`
  color: ${props => (props.isDark ? ' #f4f4f4' : '#313131')};
`
export const GameWatch = styled.p`
  color: ${props => (props.isDark ? ' #909090' : '#424242')};
`
