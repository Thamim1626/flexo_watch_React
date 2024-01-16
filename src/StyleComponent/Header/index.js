import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  color: ${props => (props.isDark ? 'white' : 'black')};
  padding: 4px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  box-shadow: 10px 10px 14px ${props => (props.isDark ? 'white' : 'black')};

  @media  (min-width: 768px) {
    padding: 8px;
  }
  @media  (min-width: 768px and max-width:992px) {
    padding: 10px;
  }
  }
  @media  (min-width: 992px) {
    padding: 16px;
  }
`

export const InnerHeader = styled.nav`
  display: flex;
  align-items: center;
`

export const NavLogo = styled.img`
  width: 180px;
`

export const HeaderNavSmallItem = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  margin-right: 10px;
`
export const HeaderNavMidItem = styled.div`
  display: none;
  margin-right: 16px;
  @media (min-width: 768px) {
    display: flex;
  }
`
export const HeaderNavItem = styled.div`
  margin-right: 12px;
`
export const Profile = styled.img`
  height: 30px;
`

export const LogoutButton = styled.button`
  height: 30px;
  width: 120px;
  font-weight: 600;
  outline: none;
  border-radius: 8px;
  border: 1px solid ${props => (props.isDark ? 'white' : 'black')};
  background-color: rgba(128, 128, 128, 0.2);

  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const ThemeButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
`
