/**
 * @jest-environment jsdom
 */

import React from 'react'
import 'jest-styled-components'
import { Result } from '../'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/theme'

describe('<Footer/>', () => {
  it('must format resultWithPlan and resultWithoutPlan to currency BRL ', () => {
    const expectProps = {
      resultWithPlan: 78.9,
      resultWithoutPlan: 189.9
    }

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Result {...expectProps} />
      </ThemeProvider>
    )

    const cardOneTitleEl = getByText('Com o fale mais')
    const cardTwoTitleEl = getByText('Sem o fale mais')
    const cardOneBodyEl = getByText('R$ 78.90')
    const cardTwoBodyEl = getByText('R$ 189.90')

    expect(cardOneTitleEl).toBeInTheDocument()
    expect(cardTwoTitleEl).toBeInTheDocument()
    expect(cardOneBodyEl).toBeInTheDocument()
    expect(cardTwoBodyEl).toBeInTheDocument()
  })
})
