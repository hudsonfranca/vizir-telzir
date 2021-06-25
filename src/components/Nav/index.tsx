import React from 'react'
import { NavContainer, Li, Ul, Logo } from './styles'

export const Nav = () => {
  return (
    <NavContainer>
      <Logo>Telzir</Logo>

      <Ul>
        <Li>Contato</Li>
        <Li>Planos</Li>
        <Li>Sobre</Li>
      </Ul>
    </NavContainer>
  )
}
