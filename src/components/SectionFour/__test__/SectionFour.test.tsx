/**
 * @jest-environment jsdom
 */

import React from 'react'
import 'jest-styled-components'
import { SectionFour } from '../'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/theme'

describe('<Footer/>', () => {
  it('must render container, formContainer, form, result, title', () => {
    const { getByTestId, container } = render(
      <ThemeProvider theme={theme}>
        <SectionFour />
      </ThemeProvider>
    )

    const formContainerEl = getByTestId('formContainer')
    const containerEl = getByTestId('comparePlans')
    const formEl = container.querySelector('#form')
    const resultEl = container.querySelector('#result')
    const titleEl = screen.getByText(/compare os nossos planos/i)

    expect(formContainerEl).toBeInTheDocument()
    expect(containerEl).toBeInTheDocument()
    expect(formEl).toBeInTheDocument()
    expect(resultEl).toBeInTheDocument()
    expect(titleEl).toBeInTheDocument()
  })
})
