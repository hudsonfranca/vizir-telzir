import React, { useState } from 'react'
import { Container, SectionTitle, FormContainer } from './styles'
import { Form } from '../Form'
import { Result } from '../Result'
import { calculateCallCost } from '../../utils/calculateCallCost'

export const SectionFour: React.FC = () => {
  const [resultWithoutPlan, setResultWithoutPlan] = useState<number>(0)
  const [resultWithPlan, setResultWithPlan] = useState<number>(0)

  const handleSubmit = (
    minutes: string,
    originAndDestinationPrice: string,
    plan: string
  ) => {
    const { costWithPlan, costWithoutPlan } = calculateCallCost(
      minutes,
      originAndDestinationPrice,
      plan
    )
    setResultWithPlan(costWithPlan)
    setResultWithoutPlan(costWithoutPlan)
  }

  return (
    <Container data-testid="comparePlans" id="comparePlans">
      <FormContainer data-testid="formContainer">
        <SectionTitle color="#000">Compare os nossos planos</SectionTitle>
        <Form onSubmit={handleSubmit} />
        <Result
          resultWithPlan={resultWithPlan}
          resultWithoutPlan={resultWithoutPlan}
          data-testid="result"
        />
      </FormContainer>
    </Container>
  )
}
