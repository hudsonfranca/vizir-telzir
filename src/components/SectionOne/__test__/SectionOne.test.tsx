/**
 * @jest-environment jsdom
 */

import React from 'react'
import 'jest-styled-components'
import { SectionOne } from '../'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/theme'

describe('<SectionOne/>', () => {
  it('must render Container,Tex', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SectionOne />
      </ThemeProvider>
    )
    const ContainerEl = getByTestId('sectionOneContainer')

    const textEl = screen.getByText(
      /lorem ipsum dolor sit amet consectetur adipisicing elit\. voluptatem assumenda explicabo\./i
    )

    expect(ContainerEl).toBeInTheDocument()
    expect(textEl).toBeInTheDocument()
  })
})
