import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginMain,
  LoginImage,
  LoginForm,
  LoginInputItems,
  LoginLabel,
  LoginInput,
  LoginCheckSection,
  LoginCheckLabel,
  CheckBoxInput,
  LoginButton,
  ErrorMsg,
} from '../../StyleComponent/Login'

class Login extends Component {
  state = {
    isDark: false,
    showPassword: false,
    onUsername: '',
    onPassword: '',
    formObject: {
      username: '',
      password: '',
    },
    isError: false,
    errorMsg: '',
  }

  // below are before fetch url
  checkOnChange = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  updateUsername = event => {
    this.setState({onUsername: event.target.value})
  }

  updatePassword = event => {
    this.setState({onPassword: event.target.value})
  }

  loginFormSubmit = async event => {
    event.preventDefault()
    const {onPassword, onUsername} = this.state
    const givenData = {username: onUsername, password: onPassword}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(givenData),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 10})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({isError: true, errorMsg: data.error_msg})
    }
  }

  // above are before fetch url

  render() {
    const {
      isDark,
      showPassword,
      onUsername,
      onPassword,
      formObject,
      errorMsg,
      isError,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginMain isDark={isDark}>
        <LoginForm isDark={isDark} onSubmit={this.loginFormSubmit}>
          <LoginImage
            src={
              isDark
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
          />
          <LoginInputItems>
            <LoginLabel isDark={isDark} htmlFor="loginUser">
              USERNAME
            </LoginLabel>
            <LoginInput
              isDark={isDark}
              type="text"
              value={onUsername}
              id="loginUser"
              onChange={this.updateUsername}
            />
          </LoginInputItems>
          <LoginInputItems>
            <LoginLabel htmlFor="loginPassword" isDark={isDark}>
              PASSWORD
            </LoginLabel>
            <LoginInput
              id="loginPassword"
              value={onPassword}
              onChange={this.updatePassword}
              isDark={isDark}
              type={showPassword ? 'text' : 'password'}
            />
          </LoginInputItems>
          <LoginCheckSection>
            <CheckBoxInput
              type="checkbox"
              onChange={this.checkOnChange}
              id="loginCheck"
            />
            <LoginCheckLabel htmlFor="loginCheck" isDark={isDark}>
              Show password
            </LoginCheckLabel>
          </LoginCheckSection>

          <LoginButton type="submit">Login</LoginButton>
          <ErrorMsg>{isError && errorMsg}</ErrorMsg>
        </LoginForm>
      </LoginMain>
    )
  }
}

export default Login
