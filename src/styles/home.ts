import styled from 'styled-components'

export const IndexContainer = styled.div`
  min-height: 100%;
`

export const Section1 = styled.section`
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

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    background-color: rgba(2, 116, 190, 0.5);
  }
`

export const Section2 = styled.section`
  width: 100%;
  height: 650px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding-left: 11%;
  padding-right: 11%;
`
export const SectionTitle = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 100px;
  padding-left: 11%;
  display: flex;
  align-items: center;
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

export const Card = styled.div.attrs((props: { bgimage: string }) => ({
  bgimage: props.bgimage
}))`
  height: 100%;
  background-image: url(${({ bgimage }) => bgimage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
  }
`
