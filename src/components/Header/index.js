import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {FaLightbulb} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineLogout} from 'react-icons/ai'
import LogoutPopup from '../LogoutPopup'
import LanguageContext from '../../Context'
import NavLeft from '../NavLeft'
import {
  LgPopup,
  InnerLgPopup,
  LogPopupMsg,
  LogPopupButtonSection,
  LogPopupButton,
} from '../LogoutPopup/style'
import {
  HeaderContainer,
  InnerHeader,
  NavLogo,
  HeaderNavSmallItem,
  HeaderNavMidItem,
  HeaderNavItem,
  Profile,
  LogoutButton,
  ThemeButton,
} from '../../StyleComponent/Header'

const Header = props => (
  <LanguageContext.Consumer>
    {value => {
      const {isDark, changeTheme} = value
      const iconStyle = {
        color: isDark ? 'white' : 'black',
        fontSize: '30px',
      }
      const changeThemeClick = () => {
        changeTheme()
      }
      const logoutOnclick = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <HeaderContainer isDark={isDark}>
          <InnerHeader>
            <NavLogo
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
            />
          </InnerHeader>
          <InnerHeader>
            <HeaderNavItem>
              <ThemeButton onClick={changeThemeClick}>
                <FaLightbulb style={iconStyle} />
              </ThemeButton>
            </HeaderNavItem>

            <HeaderNavSmallItem>
              <NavLeft />
            </HeaderNavSmallItem>
            <HeaderNavMidItem>
              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </HeaderNavMidItem>
            <HeaderNavSmallItem>
              <Popup
                trigger={
                  <AiOutlineLogout style={iconStyle} onClick={logoutOnclick} />
                }
                modal
                nested
              >
                {close => (
                  <LgPopup>
                    <InnerLgPopup isDark={isDark}>
                      <LogPopupMsg isDark={isDark}>
                        Are You Sure You Want to Logout?
                      </LogPopupMsg>
                      <LogPopupButtonSection>
                        <LogPopupButton
                          type="button"
                          onClick={() => {
                            close()
                          }}
                          isDark={isDark}
                          outline
                        >
                          Cancel
                        </LogPopupButton>
                        <LogPopupButton
                          type="button"
                          isDark={isDark}
                          onClick={logoutOnclick}
                        >
                          Conform
                        </LogPopupButton>
                      </LogPopupButtonSection>
                    </InnerLgPopup>
                  </LgPopup>
                )}
              </Popup>
            </HeaderNavSmallItem>
            <HeaderNavMidItem>
              {' '}
              <Popup
                trigger={
                  <LogoutButton
                    isDark={isDark}
                    type="button"
                    onClick={logoutOnclick}
                  >
                    Logout
                  </LogoutButton>
                }
                modal
                nested
              >
                {close => (
                  <LgPopup>
                    <InnerLgPopup isDark={isDark}>
                      <LogPopupMsg isDark={isDark}>
                        Are You Sure You Want to Logout?
                      </LogPopupMsg>
                      <LogPopupButtonSection>
                        <LogPopupButton
                          type="button"
                          onClick={() => {
                            close()
                          }}
                          isDark={isDark}
                          outline
                        >
                          Cancel
                        </LogPopupButton>
                        <LogPopupButton
                          type="button"
                          isDark={isDark}
                          onClick={logoutOnclick}
                        >
                          Conform
                        </LogPopupButton>
                      </LogPopupButtonSection>
                    </InnerLgPopup>
                  </LgPopup>
                )}
              </Popup>
            </HeaderNavMidItem>
          </InnerHeader>
        </HeaderContainer>
      )
    }}
  </LanguageContext.Consumer>
)

export default withRouter(Header)
