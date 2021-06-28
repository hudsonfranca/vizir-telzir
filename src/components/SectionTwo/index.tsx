import React from 'react'
import { Container, CardContainer, SectionTitle } from './styles'
import { Card } from '../Card'
import Image from 'next/image'

export const SectionTwo = () => {
  return (
    <Container id="plans">
      <SectionTitle color="#000">Confira os nossos planos</SectionTitle>

      <CardContainer>
        <Card
          bgimageUrl="/phone1.jpg"
          title="Fale Mais 30"
          body=" 30 Minutes para falar com quem você quiser sem pagar nada."
        >
          <Image src="/free.png" width={80} height={80} />
        </Card>
        <Card
          bgimageUrl="/phone2.jpg"
          title="Fale Mais 60"
          body="60 Minutes para falar com quem você quiser sem pagar nada."
        >
          <Image src="/free.png" width={80} height={80} />
        </Card>
        <Card
          bgimageUrl="/phone3.jpg"
          title="Fale Mais 120"
          body="120 Minutes para falar com quem você quiser sem pagar nada."
        >
          <Image src="/free.png" width={80} height={80} />
        </Card>
      </CardContainer>
    </Container>
  )
}
