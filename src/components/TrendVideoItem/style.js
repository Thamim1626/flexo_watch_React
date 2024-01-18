import styled from 'styled-components'

export const TrendItem = styled.div`
  display: flex;
  padding: 12px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

export const TrendItemThumnail = styled.img`
  width: 90%;
  @media (min-width: 768px) {
    width: 45%;
  }
`

export const TrendItemText = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  width: 90%;
`

export const TrendItemTitle = styled.h2`
  color: ${props => (props.isDark ? '#e2e8f0' : '#231f20')};
  font-size: 28px;
  margin-top: 8px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 992px) {
    font-size: 34px;
  }
`

export const VideoDateVeiw = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.isDark ? '#616e7c' : ' #475569')};
  font-weight: bold;
  margin-top: 8px;
`
export const VideoDate = styled.p`
  margin-top: 6px;
`
export const VideoView = styled.p`
  margin-right: 12px;
  margin-top: 6px;
`

export const TrendItemName = styled.p`
  color: ${props => (props.isDark ? '#616e7c' : ' #475569')};
  margin-top: 8px;
`
