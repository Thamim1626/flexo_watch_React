import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NavLeft from '../NavLeft'
import HomeVideoItem from '../HomeVideoItem'
import Header from '../Header'
import {Banner, SearchContainer} from '../Banner'
import LanguageContext from '../../Context'
import {BodyMain, BodyContent, VideoContainer} from './style'

import './index.css'

const apiConstrinst = {
  success: 'SUCCESS',
  initial: 'INITIAL',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {videoList: [], apiStatus: apiConstrinst.initial}

  componentDidMount() {
    this.fetchHomeVideosApis()
  }

  fetchHomeVideosApis = async () => {
    const url = `https://apis.ccbp.in/videos/all?search=${''}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const videoList = data.videos

    const videoListCaseChange = videoList.map(eachItem => ({
      id: eachItem.id,
      profileImageUrl: eachItem.channel.profile_image_url,
      publishedAt: eachItem.published_at,
      thumbnailUrl: eachItem.thumbnail_url,
      title: eachItem.title,
      viewCount: eachItem.view_count,

      name: eachItem.channel.name,
    }))
    if (response.ok) {
      this.setState({
        apiStatus: apiConstrinst.success,
        videoList: videoListCaseChange,
      })
    } else {
      this.setState({apiStatus: apiConstrinst.failure})
    }
  }

  renderInitialVideo = () => (
    <LanguageContext.Consumer>
      {value => {
        const {isDark} = value
        return <Loader type="ThreeDots" isDark={isDark} color="green" />
      }}
    </LanguageContext.Consumer>
  )

  renderSuccessVideo = () => (
    <LanguageContext.Consumer>
      {value => {
        const {isDark} = value
        const {videoList} = this.state
        return videoList.map(eachItem => (
          <HomeVideoItem
            eachItem={eachItem}
            key={eachItem.id}
            isDark={isDark}
          />
        ))
      }}
    </LanguageContext.Consumer>
  )

  renderFailureVideo = () => <h1>Failure</h1>

  renderWithApiSwitch = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstrinst.initial:
        return this.renderInitialVideo()

      case apiConstrinst.success:
        return this.renderSuccessVideo()

      default:
        return this.renderFailureVideo()
    }
  }

  render() {
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
                  <Banner />
                  <SearchContainer />
                  <VideoContainer>{this.renderWithApiSwitch()}</VideoContainer>
                </BodyContent>
              </BodyMain>
            </>
          )
        }}
      </LanguageContext.Consumer>
    )
  }
}

export default Home
