import React from 'react'
import { Container, CardBody, CardTitle } from './styles'

interface Props {
  bgimageUrl: string
  body: string
  title: string
}

export const Card: React.FC<Props> = ({
  children,
  bgimageUrl,
  body,
  title
}) => {
  return (
    <Container bgimageUrl={bgimageUrl} data-testid="card">
      <CardTitle>{title}</CardTitle>
      <CardBody>
        {body}
        {children}
      </CardBody>
    </Container>
  )
}
