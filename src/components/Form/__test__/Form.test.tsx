/**
 * @jest-environment jsdom
 */

import React from 'react'
import 'jest-styled-components'
import { Form } from '../'
import { render, screen, act, fireEvent } from '@testing-library/react'

describe('<Form/>', () => {
  it('must call handleSubmit', async () => {
    const onSubmit = jest.fn()
    const { getByTestId } = render(<Form onSubmit={onSubmit} />)

    const originAndDestinationPriceEl = getByTestId('originAndDestinationPrice')
    const minutesEl = getByTestId('minutes')
    const plansEl = getByTestId('plan')
    const submitBtn = screen.getByRole('button', {
      name: /calcular/i
    })

    expect(originAndDestinationPriceEl).toBeInTheDocument()
    expect(minutesEl).toBeInTheDocument()
    expect(plansEl).toBeInTheDocument()
    expect(submitBtn).toBeInTheDocument()

    await act(async () => {
      fireEvent.change(originAndDestinationPriceEl, {
        target: {
          value: 1.9
        }
      })
    })

    await act(async () => {
      fireEvent.change(minutesEl, {
        target: {
          value: 20
        }
      })
    })

    await act(async () => {
      fireEvent.change(plansEl, {
        target: {
          value: 30
        }
      })
    })

    await act(async () => {
      fireEvent.click(submitBtn)
    })

    expect(onSubmit).toBeCalled()
  })
})
