import styled from 'styled-components'

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 11%;
  padding-right: 11%;
  align-items: center;
  color: ${({ theme }) => theme.colors.green};
  font-size: 1.5rem;
  background-image: url('/baner2.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 1;
  margin-bottom: 30px;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
  }
  p {
    z-index: 4;
    line-height: 1.7rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const SectionTitle = styled.p.attrs((props: { color: string }) => ({
  color: props.color
}))`
  font-size: 2.5rem;
  color: ${({ color }) => color};
  width: 100%;
  height: 100px;
  display: flex;
  grid-area: title;
  justify-content: center;
  margin-bottom: 20px;
  z-index: 3;
`
