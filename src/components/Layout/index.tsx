import React from 'react'
import { Nav } from '../Nav'
import { Main } from '../Main'
import { Footer } from '../Footer'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
