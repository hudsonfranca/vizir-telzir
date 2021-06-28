/**
 * @jest-environment jsdom
 */

import React from 'react'
import 'jest-styled-components'
import { Nav } from '../'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/theme'

describe('<Nav/>', () => {
  it('must render the logo and navigation links', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Nav />
      </ThemeProvider>
    )

    const logoElement = getByText('Telzir')
    const navContainerElement = getByTestId('nav')
    const plansLink = getByText('Planos')
    const aboutLink = getByText('Sobre')
    const comparePlansLink = getByText('Compare')

    expect(logoElement).toBeInTheDocument()
    expect(navContainerElement).toBeInTheDocument()
    expect(plansLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(comparePlansLink).toBeInTheDocument()
  })
})
