import React from 'react'
import Head from 'next/head'
import {
  IndexContainer,
  Section1,
  Section2,
  Text,
  ArrowDown,
  Card,
  SectionTitle
} from '../styles/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Telzir</title>
      </Head>
      <IndexContainer>
        <Section1>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            assumenda explicabo at soluta aspernatur, possimus placeat!
          </Text>
          <ArrowDown src="/seta-arrow-gif-1.gif" />
        </Section1>
        <SectionTitle>Confira os nossos planos</SectionTitle>
        <Section2>
          <Card bgimage="/phone1.jpg" />
          <Card bgimage="/phone2.jpg" />
          <Card bgimage="/phone3.jpg" />
        </Section2>
      </IndexContainer>
    </>
  )
}
