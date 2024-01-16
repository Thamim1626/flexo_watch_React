import styled from 'styled-components'

export const LgPopup = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(128, 128, 128, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InnerLgPopup = styled.div`
  height: 200px;
  width: 380px;
  background-color: ${props => (props.isDark ? '#212121' : 'white')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 12px;
`

export const LogPopupMsg = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#00306e')};
  font-weight: 600;
  font-size: 20px;
  font-family: sans-serif;
`
export const LogPopupButtonSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`

export const LogPopupButton = styled.button`
  width: 136px;
  height: 36px;
  text-align: center;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => (props.isDark ? 'white' : 'black')};
  border: ${props => !props.outline && 'none'};
  background: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  color: ${props => (props.isDark ? '#fff' : '#000')};
  color: ${props => !props.outline && '#fff'};

  border-radius: 6px;
`
