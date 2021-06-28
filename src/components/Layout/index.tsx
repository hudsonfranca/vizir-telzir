import React from 'react'
import { Nav } from '../Nav'
import { Main } from '../Main'
import { Footer } from '../Footer'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Nav data-testid="nav" />
      <Main data-testid="main">{children}</Main>
      <Footer data-testid="footer" />
    </>
  )
}
