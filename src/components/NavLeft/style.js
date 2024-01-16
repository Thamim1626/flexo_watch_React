import styled from 'styled-components'

export const BodyLeft = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 8px;

  height: 110vh;
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const NavContact = styled.div`
  color: ${props => (props.isDark ? 'white' : 'black')};

  box-sizing: border-box;
`
