import React from 'react'
import { Container, SectionTitle } from './styles'

export const SectionThree = () => {
  return (
    <Container data-testid="about" id="about">
      <SectionTitle id="sectionThreeTitle" color="#ffff">
        Sobre nós
      </SectionTitle>
      <p data-testid="sectionThreeContent">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis
        veritatis corporis voluptates id architecto vero repudiandae omnis fugit
        veniam consectetur libero.
      </p>
    </Container>
  )
}
