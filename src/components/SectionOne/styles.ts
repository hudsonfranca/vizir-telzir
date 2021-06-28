import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background-image: url('/baner1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  object-fit: cover;
  margin-bottom: 30px;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    background-color: rgba(2, 116, 190, 0.5);
  }
`
export const Text = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  z-index: 3;
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 11%;
  padding: 6px;
`
