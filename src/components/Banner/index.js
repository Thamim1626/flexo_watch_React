import {FaTimes, FaSearch} from 'react-icons/fa'
import LanguageContext from '../../Context'
import {
  BannerContainer,
  SearchContianer,
  SearchInput,
  SearchButton,
} from './style'

import './index.css'

export const Banner = () => (
  <LanguageContext.Consumer>
    {value => {
      const {isBannerDisplay, disappearBanner} = value
      const onClickdisappearBanner = () => {
        disappearBanner()
      }
      return (
        <BannerContainer isBannerDisplay={isBannerDisplay}>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="logo"
              className="banner-logo"
            />
            <p className="banner-des">Buy NXT watch premium Prepaid With UPI</p>
            <button type="button" className="banner-button">
              GOT IT NOW
            </button>
          </div>
          <FaTimes style={{fontWeight: 400}} onClick={onClickdisappearBanner} />
        </BannerContainer>
      )
    }}
  </LanguageContext.Consumer>
)

export const SearchContainer = () => (
  <LanguageContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <SearchContianer isDark={isDark}>
          <SearchInput type="search" />
          <SearchButton isDark={isDark}>
            <FaSearch />
          </SearchButton>
        </SearchContianer>
      )
    }}
  </LanguageContext.Consumer>
)
