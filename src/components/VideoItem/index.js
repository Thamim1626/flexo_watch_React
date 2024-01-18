import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Header from '../Header'
import LanguageContext from '../../Context'
import NavLeft from '../NavLeft'
import {Banner, SearchContainer} from '../Banner'

import {BodyMain, BodyContent, VideoContainer} from '../Home/style'
import {VidoeCardTitle, VideoItemContainer} from './style'

const apiConstrinst = {
  success: 'SUCCESS',
  initial: 'INITIAL',
  failure: 'FAILURE',
}

class VideoItem extends Component {
  state = {videoItem: [], apiStatus: apiConstrinst.initial}

  componentDidMount() {
    this.fetchVideoItemDetailList()
  }

  fetchVideoItemDetailList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const videoDetails = data.video_details
    const caseChangeVideoDetails = {
      channel: {
        name: videoDetails.name,
        profileImageUrl: videoDetails.profile_image_url,
      },
      description: videoDetails.description,
      id: videoDetails.id,
      publishedAt: videoDetails.published_at,
      thumbnailUrl: videoDetails.thumbnail_url,
      title: videoDetails.title,
      videoUrl: videoDetails.video_url,
      viewCount: videoDetails.view_count,
    }
    if (response.ok) {
      this.setState({
        videoItem: caseChangeVideoDetails,
        apiStatus: apiConstrinst.success,
      })
    } else {
      this.setState({
        apiStatus: apiConstrinst.failure,
      })
    }
  }

  renderInital = () => {}

  renderSuccess = () => {
    const {videoItem} = this.state
    const {
      channel,
      description,
      id,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
    } = videoItem
    console.log(videoItem)

    return (
      <LanguageContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <VideoItemContainer>
              <ReactPlayer url={videoUrl} />
              <VidoeCardTitle isDark={isDark}>{title}</VidoeCardTitle>
            </VideoItemContainer>
          )
        }}
      </LanguageContext.Consumer>
    )
  }

  renderFailure = () => {}

  renderVideoItemSwitch = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstrinst.initial:
        return this.renderInital()

      case apiConstrinst.success:
        return this.renderSuccess()

      default:
        return this.renderFailure()
    }
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <LanguageContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Header />
              <BodyMain isDark={isDark}>
                <NavLeft />
                <BodyContent>
                  {/* <Banner /> */}
                  <VideoContainer>
                    {this.renderVideoItemSwitch()}
                  </VideoContainer>
                </BodyContent>
              </BodyMain>
            </>
          )
        }}
      </LanguageContext.Consumer>
    )
  }
}

export default VideoItem
