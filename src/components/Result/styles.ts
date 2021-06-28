import styled from 'styled-components'

export const Container = styled.div`
  grid-area: result;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 280px));
  grid-gap: 20px;
  justify-content: flex-end;
  margin-top: 20px;

  @media (max-width: 769px) {
    justify-content: center;
  }
`
