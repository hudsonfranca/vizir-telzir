import styled from 'styled-components'

export const Container = styled.section`
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
export const CardContainer = styled.div`
  min-height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  grid-gap: 20px;
  align-items: center;
  justify-content: center;
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
