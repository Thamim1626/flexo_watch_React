import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: ${props => (props.isBannerDisplay ? 'flex' : 'none')};
  justify-content: space-between;
  padding: 12px;
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  margin-bottom: 20px;
`
export const SearchContianer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 500px;
  height: 40px;
  border: 2px solid ${props => (props.isDark ? '#7e858e' : '#7e858e')};
  padding: 4px;
  border-radius: 4px;
  margin-bottom: 20px;
`
export const SearchInput = styled.input`
  width: 90%;
  height: 70%;
  background-color: transparent;
  outline: none;
  border: none;
  color: ${props => (props.isDark ? '#ebebeb' : '#424242')};
  font-weight: bold;
  font-family: sans-serif;
`

export const SearchButton = styled.button`
  outline: none;
  border: none;
  height: 32px;
  width: 32px;
  padding: 0px;
  background-color: transparent;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
