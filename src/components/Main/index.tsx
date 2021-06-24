import React from 'react'

import styled from 'styled-components'

const MainContainer = styled.main`
  padding-top: 66px;
`

export const Main: React.FC = ({ children }) => {
  return <MainContainer>{children}</MainContainer>
}
