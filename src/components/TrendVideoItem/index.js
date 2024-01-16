import LanguageContext from '../../Context'
import {
  TrendItem,
  TrendItemThumnail,
  TrendItemText,
  TrendItemTitle,
  VideoDateVeiw,
  VideoView,
  TrendItemName,
  VideoDate,
} from './style'

const TrendVideoItem = props => {
  const {eachItem} = props
  const {
    id,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    name,
  } = eachItem
  return (
    <LanguageContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <TrendItem>
            <TrendItemThumnail src={thumbnailUrl} />
            <TrendItemText>
              <TrendItemTitle isDark={isDark}>{title}</TrendItemTitle>
              <TrendItemName isDark={isDark}>{name}</TrendItemName>
              <VideoDateVeiw isDark={isDark}>
                <VideoView isDark={isDark}>{viewCount} views</VideoView>
                <VideoDate isDark={isDark}>{publishedAt} </VideoDate>
              </VideoDateVeiw>
            </TrendItemText>
          </TrendItem>
        )
      }}
    </LanguageContext.Consumer>
  )
}

export default TrendVideoItem
