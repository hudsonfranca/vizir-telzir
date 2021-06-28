import React from 'react'
import { NavContainer, Li, Ul, Logo } from './styles'
import { Link } from 'react-scroll'

export const Nav = () => {
  return (
    <NavContainer data-testid="nav">
      <Logo>Telzir</Logo>

      <Ul>
        <Li>
          <Link
            activeClass="active"
            to="plans"
            spy={true}
            offset={50}
            duration={500}
            delay={1000}
            isDynamic={true}
          >
            Planos
          </Link>
        </Li>
        <Li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            offset={50}
            duration={500}
            delay={1000}
            isDynamic={true}
          >
            Sobre
          </Link>
        </Li>
        <Li>
          <Link
            activeClass="active"
            to="comparePlans"
            spy={true}
            offset={50}
            duration={500}
            delay={1000}
            isDynamic={true}
          >
            Compare
          </Link>
        </Li>
      </Ul>
    </NavContainer>
  )
}
