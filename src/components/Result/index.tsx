import React from 'react'
import { Container } from './styles'
import { Card } from '../Card'

interface Props {
  resultWithPlan: number
  resultWithoutPlan: number
}

export const Result: React.FC<Props> = ({
  resultWithPlan,
  resultWithoutPlan
}) => {
  const formatter = new Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL'
  })
  return (
    <Container>
      <Card
        bgimageUrl=""
        body={formatter.format(resultWithPlan)}
        title="Com o fale mais"
      ></Card>
      <Card
        bgimageUrl=""
        body={formatter.format(resultWithoutPlan)}
        title="Sem o fale mais"
      ></Card>
    </Container>
  )
}
