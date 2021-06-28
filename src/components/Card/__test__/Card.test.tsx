/**
 * @jest-environment jsdom
 */

import React from 'react'
import 'jest-styled-components'
import { Card } from '../'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/theme'

let expectProps: {
  body: string
  title: string
  bgimageUrl: string
}

describe('<Card/>', () => {
  beforeEach(() => {
    expectProps = {
      body: 'Card Body',
      title: 'Card Title',
      bgimageUrl: '/baner.jpg'
    }
  })
  it('must render the Card with its props', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Card {...expectProps} />
      </ThemeProvider>
    )

    const titleElement = getByText(expectProps.title)
    const bodyElement = getByText(expectProps.title)
    const CardElement = getByTestId('card')

    expect(titleElement).toBeInTheDocument()
    expect(bodyElement).toBeInTheDocument()
    expect(CardElement).toBeInTheDocument()
  })
})
