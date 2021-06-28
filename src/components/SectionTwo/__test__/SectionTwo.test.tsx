/**
 * @jest-environment jsdom
 */

import React from 'react'
import 'jest-styled-components'
import { SectionTwo } from '../'
import { render, screen, within } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/theme'

describe('<SectionTwo/>', () => {
  it('should render a card for Fale Mais 30, Fale Mais 60, and Fale Mais 120', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <SectionTwo />
      </ThemeProvider>
    )

    const cardOneBodyEl = screen.getByText(
      /30 minutes para falar com quem você quiser sem pagar nada\./i
    )

    const cardTwoBodyEl = screen.getByText(
      /60 minutes para falar com quem você quiser sem pagar nada\./i
    )

    const cardtThreeBodyEl = screen.getByText(
      /120 minutes para falar com quem você quiser sem pagar nada\./i
    )

    const cardOneTitleEl = getByText('Fale Mais 30')

    const cardTwoTitleEl = getByText('Fale Mais 60')

    const cardtThreeTitleEl = getByText('Fale Mais 120')

    expect(cardOneTitleEl).toBeInTheDocument()
    expect(cardTwoTitleEl).toBeInTheDocument()
    expect(cardtThreeTitleEl).toBeInTheDocument()

    expect(cardOneBodyEl).toBeInTheDocument()
    expect(cardTwoBodyEl).toBeInTheDocument()
    expect(cardtThreeBodyEl).toBeInTheDocument()

    within(cardOneBodyEl).getByRole('img')
    within(cardTwoBodyEl).getByRole('img')
    within(cardTwoBodyEl).getByRole('img')
  })
})
