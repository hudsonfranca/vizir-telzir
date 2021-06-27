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
  margin-bottom: 30px;
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
  height: 600px;
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

export const SectionFour = styled.section`
  width: 100%;
  min-height: 600px;
  padding-left: 11%;
  padding-right: 11%;
`

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'title title'
      'form result';
  }

  form {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    grid-area: form;
    padding: 0 20px 0 20px;
    margin-top: 20px;
    button {
      align-self: center;
    }
  }
`
export const Result = styled.div`
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
