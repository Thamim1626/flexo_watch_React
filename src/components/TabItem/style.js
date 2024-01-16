import styled from 'styled-components'

export const TabItems = styled.li`
  width: 190px;
  padding: 2px 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  margin-top: 6px;
  margin-bottom: 6px;
  color: ${props => (props.isDark ? 'white' : 'black')};
  background-color: ${props => props.activeTab && '#606060'};
`

export const TabItemIcon = styled.p`
  margin-right: 8px;
  font-size: 23px;
  color: ${props => (props.isDark ? '#ff0000' : ' #ff0b37')};
`

export const TabItemDes = styled.p`
  margin-left: 4px;
  font-size: 18px;
`
