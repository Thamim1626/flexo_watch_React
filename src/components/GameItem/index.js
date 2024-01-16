import {GameItems, GameImage, GameHeading, GameWatch} from './style'

const GameItem = props => {
  const {eachItem, isDark} = props
  const {id, thumbnailUrl, title, viewCount} = eachItem
  return (
    <GameItems>
      <GameImage src={thumbnailUrl} />
      <GameHeading isDark={isDark}>{title}</GameHeading>
      <GameWatch isDark={isDark}>{viewCount} Watching Worldwide</GameWatch>
    </GameItems>
  )
}

export default GameItem
