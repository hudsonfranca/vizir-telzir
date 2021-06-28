import styled from 'styled-components'

export const Container = styled.div.attrs((props: { bgimageUrl?: string }) => ({
  bgimageUrl: props.bgimageUrl
}))`
  height: 100%;
  width: 100%;
  background-image: url(${({ bgimageUrl }) => bgimageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: cover;
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const CardTitle = styled.header`
  width: 100%;
  height: 50px;
  align-self: flex-start;
  background-color: ${({ theme }) => theme.colors.green};
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`

export const CardBody = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  z-index: 3;
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 100%;
  text-align: center;
`
