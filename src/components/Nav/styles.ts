import styled from 'styled-components'

export const NavContainer = styled.header`
  height: 66px;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  padding-left: 11%;
  padding-right: 11%;

  @media (max-width: 441px) {
    padding-left: 3%;
    padding-right: 3%;
  }
`
export const Ul = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 10px;
`
export const Li = styled.li`
  margin: 0 20px 0 20px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  font-size: 1.1rem;

  a {
    text-decoration: none;
  }

  .active {
    color: red;
    color: ${({ theme }) => theme.colors.tertiary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`
export const Logo = styled.div`
  font-size: 1.6rem;
  cursor: pointer;
`
