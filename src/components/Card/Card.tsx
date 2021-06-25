import React from 'react'
import { Container } from './styles'

interface Props {
  bgimageUrl: string
}

const Card: React.FC<Props> = ({ children, bgimageUrl }) => {
  return <Container bgimageUrl={bgimageUrl}>{children}</Container>
}
export default Card
