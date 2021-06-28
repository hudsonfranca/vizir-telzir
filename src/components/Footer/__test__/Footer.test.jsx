/**
 * @jest-environment jsdom
 */

import React from 'react'
import 'jest-styled-components'
import { Footer } from '../'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/theme'

describe('<Footer/>', () => {
  it('must render the footer component ', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    )

    const footerEl = screen.getByRole('contentinfo')
    const footerLogoEl = getByText('Telzir')

    expect(footerEl).toBeInTheDocument()
    expect(footerLogoEl).toBeInTheDocument()
  })
})
