import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import LanguageContext from './Context'
import Login from './components/Login'
import Home from './components/Home'
import Trend from './components/Trend'
import Game from './components/Game'
import ProductFile from './ProductFile'
import LogoutPopup from './components/LogoutPopup'
import VideoItem from './components/VideoItem'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, activeTab: 'home', isBannerDisplay: true}

  changeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  changeTab = id => {
    this.setState({activeTab: id})
  }

  disappearBanner = () => {
    this.setState({isBannerDisplay: false})
  }

  render() {
    const {isDark, activeTab, isBannerDisplay} = this.state
    return (
      <LanguageContext.Provider
        value={{
          isDark,
          activeTab,
          changeTheme: this.changeTheme,
          changeTab: this.changeTab,
          isBannerDisplay,
          disappearBanner: this.disappearBanner,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProductFile exact path="/" component={Home} />
          <ProductFile exact path="/trending" component={Trend} />
          <ProductFile exact path="/game" component={Game} />
          <ProductFile exact path="/video/:id" component={VideoItem} />
          <Route component={LogoutPopup} />
        </Switch>
      </LanguageContext.Provider>
    )
  }
}

export default App
