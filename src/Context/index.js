import React from 'react'

const LanguageContext = React.createContext({
  isDark: true,
  activeTab: 'home',
  changeTheme: () => {},
  changeTab: () => {},
  disappearBanner: () => {},
  isBannerDisplay: true,
})

export default LanguageContext
