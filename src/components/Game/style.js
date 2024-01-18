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
`
// search container style

export const VideoContainer = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
export const TrendHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 42px;
  color: red;
  align-self: center;
  height: 100px;
  padding: 20px;
  background-color: ${props => (props.isDark ? ' #7e858e' : '#cbd5e1')};
  width: 100%;
`
export const TrendHeaderHeading = styled.h1`
  font-size: 32px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const GameLists = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 12px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
