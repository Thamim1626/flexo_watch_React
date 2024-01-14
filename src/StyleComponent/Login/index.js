import styled from 'styled-components'

export const LoginMain = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
`

export const LoginForm = styled.form`
  width: 90%;
  max-width: 480px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border: 2px solid
    ${props =>
      props.isDark ? 'rgba(225, 225, 225, 0.3)' : 'rgba(0, 0, 0, 0.3)'};
  box-shadow: 5px 5px 20px
    ${props =>
      props.isDark ? 'rgba(225, 225, 225, 0.3)' : 'rgba(0, 0, 0, 0.3)'};

  border-radius: 8px;
`

export const LoginImage = styled.img`
  width: 150px;
  align-self: center;
  margin-bottom: 16px;
`
export const LoginInputItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 250px;
  margin-top: 20px;
`
export const LoginLabel = styled.label`
  color: ${props => (props.isDark ? 'white' : 'black')};
  margin-bottom: 6px;
  font-weight: bold;
`

export const LoginInput = styled.input`
  outline: none;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  color: ${props => (props.isDark ? 'white' : 'black')};
  border: 1px solid grey;
  height: 28px;
  padding: 6px;
  border-radius: 4px;
`
export const LoginCheckSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
`
export const LoginCheckLabel = styled.label`
  font-size: 14px;
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const CheckBoxInput = styled.input`
  margin-right: 4px;
`
export const LoginButton = styled.button`
  outline: none;
  border: none;
  color: white;
  align-self: center;
  margin-top: 20px;
  background-color: #3b82f6;
  color: white;
  width: 136px;
  height: 36px;
  font-weight: bold;
  font-size: 18px;
  border-radius: 8px;
`
export const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
  align-self: center;
  margin-top: 12px;
`
