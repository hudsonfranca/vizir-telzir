import styled from 'styled-components'

export const IndexContainer = styled.div`
  min-height: 100%;
`

export const SectionOne = styled.section`
  width: 100%;
  height: 650px;
  background-image: url('/baner1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  object-fit: cover;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    background-color: rgba(2, 116, 190, 0.5);
  }
`

export const SectionTwo = styled.section`
  min-height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 11%;
  padding-right: 11%;
  align-items: center;
  object-fit: cover;
`
export const SectionTitle = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
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
export const ArrowDown = styled.img`
  z-index: 3;
  width: 100px;
  height: 100px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 80%;
  text-align: center;
  cursor: pointer;
  border: none;
`

export const CardContainer = styled.div`
  min-height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  grid-gap: 20px;
  align-items: center;
  justify-content: center;
`
export const SectionThree = styled.section`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};

  p {
  }
`
