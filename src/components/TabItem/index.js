import {Link} from 'react-router-dom'
import LanguageContext from '../../Context'
import {TabItems, TabItemIcon, TabItemDes} from './style'
import './index.css'

const TabItem = props => {
  const {eachItem} = props
  const {displayText, icon, route, tabId} = eachItem

  return (
    <LanguageContext.Consumer>
      {value => {
        const {isDark, activeTab, changeTab} = value
        const onClickTabChange = () => {
          changeTab(tabId)
        }
        return (
          <Link to={`/${route}`} className="nav-link">
            <TabItems
              activeTab={activeTab === tabId}
              isDark={isDark}
              onClick={onClickTabChange}
            >
              <TabItemIcon isDark={isDark}>{icon}</TabItemIcon>
              <TabItemDes>{displayText}</TabItemDes>
            </TabItems>
          </Link>
        )
      }}
    </LanguageContext.Consumer>
  )
}

export default TabItem
