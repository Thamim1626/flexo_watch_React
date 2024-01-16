import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'

import NavLeft from '../NavLeft'
import HomeVideoItem from '../HomeVideoItem'
import Header from '../Header'
import TrendVideoItem from '../TrendVideoItem'
import {Banner, SearchContainer} from '../Banner'
import LanguageContext from '../../Context'
import {
  BodyMain,
  BodyContent,
  VideoContainer,
  TrendHeader,
  TrendHeaderHeading,
} from './style'

import './index.css'

const apiConstrinst = {
  success: 'SUCCESS',
  initial: 'INITIAL',
  failure: 'FAILURE',
}

class Trend extends Component {
  state = {videoList: [], apiStatus: apiConstrinst.initial, isDark: false}

  componentDidMount() {
    this.fetchHomeVideosApis()
  }

  fetchHomeVideosApis = async () => {
    const url = `https://apis.ccbp.in/videos/trending`
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
    console.log(videoListCaseChange[0].name)
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
        return <Loader type="ThreeDots" color="green" />
      }}
    </LanguageContext.Consumer>
  )

  renderSuccessVideo = () => (
    <LanguageContext.Consumer>
      {value => {
        const {isDark} = value
        const {videoList} = this.state
        return videoList.map(eachItem => (
          <TrendVideoItem eachItem={eachItem} key={eachItem.id} />
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
                  <TrendHeader isDark={isDark}>
                    <FaFire />
                    <TrendHeaderHeading isDark={isDark}>
                      TRENDING
                    </TrendHeaderHeading>
                  </TrendHeader>
                  {this.renderWithApiSwitch()}
                </BodyContent>
              </BodyMain>
            </>
          )
        }}
      </LanguageContext.Consumer>
    )
  }
}

export default Trend
