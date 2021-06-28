import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  height: 90px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-top: 40px;
  border-top: 3px solid ${({ theme }) => theme.colors.green};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
`

export const Footer = () => {
  return (
    <FooterContainer>
      <p>Telzir</p>
    </FooterContainer>
  )
}
