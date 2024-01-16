import {Link} from 'react-router-dom'
import LanguageContext from '../../Context'

import {
  VideoItemContainer,
  HomeItemImage,
  HomeVideoTextSection,
  VideosIcon,
  ViedoOnlyText,
  VideosDes,
  VideosName,
  VideoDateVeiw,
  VideoView,
  VideoDate,
} from './style'

const HomeVideoItem = props => {
  const {eachItem} = props

  const {
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    profileImageUrl,
    id,
    name,
  } = eachItem
  return (
    <LanguageContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <VideoItemContainer>
            <Link to={`/${id}`}>
              {' '}
              <HomeItemImage src={thumbnailUrl} alt="title" />{' '}
            </Link>
            <HomeVideoTextSection>
              <VideosIcon src={profileImageUrl} />
              <ViedoOnlyText>
                <VideosDes isDark={isDark}>{title}</VideosDes>
                <VideosName isDark={isDark}>{name}</VideosName>
                <VideoDateVeiw isDark={isDark}>
                  <VideoView>{viewCount} views</VideoView>
                  <VideoDate>{publishedAt} </VideoDate>
                </VideoDateVeiw>
              </ViedoOnlyText>
            </HomeVideoTextSection>
          </VideoItemContainer>
        )
      }}
    </LanguageContext.Consumer>
  )
}

export default HomeVideoItem
