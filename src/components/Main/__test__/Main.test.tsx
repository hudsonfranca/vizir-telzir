/**
 * @jest-environment jsdom
 */

import React from 'react'
import 'jest-styled-components'
import { Main } from '../'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/theme'

describe('<Main/>', () => {
  it('must render MainContainer', () => {
    const { container, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    )
    const mainContainerEl = getByTestId('mainContainer')

    expect(mainContainerEl).toBeInTheDocument()
  })
})
