/**
 * @jest-environment jsdom
 */

import React from 'react'
import 'jest-styled-components'
import { SectionThree } from '../'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/theme'

describe('<SectionThree/>', () => {
  it('must render Container,SectionTitle,sectionThreeContent', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SectionThree />
      </ThemeProvider>
    )
    const ContainerEl = getByTestId('about')
    const sectionContentEl = getByTestId('sectionThreeContent')

    const sectionTitle = screen.getByText(/sobre nós/i)

    expect(ContainerEl).toBeInTheDocument()
    expect(sectionContentEl).toBeInTheDocument()
    expect(sectionTitle).toBeInTheDocument()
  })
})
