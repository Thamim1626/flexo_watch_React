import styled from 'styled-components'

export const BodyMain = styled.div`
  display: flex;
  padding: 12px;
  align-items: flex-start;
  width: 100vw;
  margin-top: 1px;
  box-sizing: border-box;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
`
// right style started

export const BodyContent = styled.div`
  flex-grow: 1;
  height: 100vh;
  overflow-y: scroll;
  padding-top: 12px;
  border-radius: 12px;
`
// search container style

export const VideoContainer = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
