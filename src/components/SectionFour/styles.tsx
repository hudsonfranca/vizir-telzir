import styled from 'styled-components'

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

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-left: 11%;
  padding-right: 11%;
  display: flex;
  justify-content: center;
  align-items: center;
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
