import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  width: 90%;
  max-width: 450px;
  flex-grow: 12;
  padding: 12px;
  @media (min-width: 768px) {
    width: 40%;
  }
  @media (min-width: 992px) {
    width: 30%;
  }
`

export const HomeItemImage = styled.img`
  width: 100%;
`

export const HomeVideoTextSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const VideosIcon = styled.img`
  width: 40px;
  margin-right: 6px;
`

export const ViedoOnlyText = styled.div``

export const VideosDes = styled.p`
  color: ${props => (props.isDark ? '#cccccc' : '#313131')};
  margin-top: 6px;
  font-size: 13px;
  font-weight: bold;
`
export const VideosName = styled.p`
  color: ${props => (props.isDark ? '#909090' : '#7e858e')};
  margin-top: 6px;
`
export const VideoDateVeiw = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.isDark ? '#616e7c' : ' #475569')};
`
export const VideoDate = styled.p`
  margin-top: 6px;
`
export const VideoView = styled.p`
  margin-right: 12px;
  margin-top: 6px;
`
