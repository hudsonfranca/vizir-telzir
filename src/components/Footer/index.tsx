import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  height: 90px;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Footer = () => {
  return (
    <FooterContainer>
      <p>Footer</p>
    </FooterContainer>
  )
}
