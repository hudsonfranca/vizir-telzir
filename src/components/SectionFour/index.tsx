import React, { useState } from 'react'
import { Container, SectionTitle, FormContainer } from './styles'
import { Form } from '../Form'
import { Result } from '../Result'

export const SectionFour: React.FC = () => {
  const [resultWithoutPlan, setResultWithoutPlan] = useState<number>(0)
  const [resultWithPlan, setResultWithPlan] = useState<number>(0)
  const [plan, setPlan] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [originAndDestinationPrice, setOriginAndDestinationPrice] =
    useState<number>(0)

  const handleChangeResult = (params: {
    resultWithoutPlan: number
    resultWithPlan: number
  }) => {
    setResultWithPlan(params.resultWithPlan)
    setResultWithoutPlan(params.resultWithoutPlan)
  }

  const handleSubmit = (
    minutes: string,
    originAndDestinationPrice: string,
    plan: string
  ) => {
    if (minutes > plan) {
      const percentage = 0.1 * parseFloat(originAndDestinationPrice)

      const minutePrice = percentage + parseFloat(originAndDestinationPrice)

      const excessMinutes = parseInt(minutes) - parseInt(plan)

      const resultWithPlan = excessMinutes * minutePrice
      const resultWithoutPlan =
        parseInt(minutes) * parseFloat(originAndDestinationPrice)

      handleChangeResult({ resultWithPlan, resultWithoutPlan })
    } else {
      const resultWithPlan = 0
      const resultWithoutPlan =
        parseInt(minutes) * parseFloat(originAndDestinationPrice)

      handleChangeResult({ resultWithPlan, resultWithoutPlan })
    }
  }
  return (
    <Container id="comparePlans">
      <FormContainer>
        <SectionTitle color="#000">Compare os nossos planos</SectionTitle>
        <Form onSubmit={handleSubmit} />
        <Result
          resultWithPlan={resultWithPlan}
          resultWithoutPlan={resultWithoutPlan}
        />
      </FormContainer>
    </Container>
  )
}
