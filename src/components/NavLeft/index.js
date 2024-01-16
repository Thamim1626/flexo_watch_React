import {Component} from 'react'
import {FaFire, FaHome, FaRegBookmark, FaGamepad} from 'react-icons/fa'
import TabItem from '../TabItem'
import LanguageContext from '../../Context'
import {BodyLeft, NavContact} from './style'

const tabItemDeatil = [
  {
    tabId: 'home',
    displayText: 'Home',
    icon: <FaHome />,
    route: '',
  },
  {
    tabId: 'trending',
    displayText: 'Trending',
    icon: <FaFire />,
    route: 'trending',
  },
  {
    tabId: 'game',
    displayText: 'Gameing',
    icon: <FaGamepad />,
    route: 'game',
  },
  {
    tabId: 'saved',
    displayText: 'Saved Videos',
    icon: <FaRegBookmark />,
    route: 'saved',
  },
]

class NavLeft extends Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <BodyLeft>
                <ul className="tabItem-container">
                  {tabItemDeatil.map(eachItem => (
                    <TabItem eachItem={eachItem} key={eachItem.tabId} />
                  ))}
                </ul>
                <NavContact isDark={isDark}>
                  <h1 className="nav-contact-heading">Contact Us</h1>
                  <div className="contact-social-media">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                      className="social-image"
                    />
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                      className="social-image"
                    />
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                      className="social-image"
                    />
                  </div>
                  <p className="contact-des">
                    Enjoy! Now to see your channels and recommentation
                  </p>
                </NavContact>
              </BodyLeft>
            </>
          )
        }}
      </LanguageContext.Consumer>
    )
  }
}

export default NavLeft
