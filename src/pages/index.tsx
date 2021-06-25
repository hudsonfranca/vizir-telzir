import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import {
  IndexContainer,
  SectionOne,
  SectionTwo,
  Text,
  ArrowDown,
  SectionTitle,
  CardContainer,
  SectionThree
} from '../styles/home'

import { Card, CardTitle, CardBody } from '../components/Card'

export default function Home() {
  return (
    <>
      <Head>
        <title>Telzir</title>
      </Head>
      <IndexContainer>
        <SectionOne>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            assumenda explicabo at soluta aspernatur, possimus placeat!
          </Text>
          <ArrowDown src="/seta-arrow-gif-1.gif" />
        </SectionOne>

        <SectionTwo>
          <SectionTitle>Confira os nossos planos</SectionTitle>

          <CardContainer>
            <Card bgimageUrl="/phone1.jpg">
              <CardTitle>Fale Mais 30</CardTitle>
              <CardBody>
                30 Minutes para falar com quem você quiser sem pagar nada.
                <Image src="/free.png" width={80} height={80} />
              </CardBody>
            </Card>
            <Card bgimageUrl="/phone2.jpg">
              <CardTitle>Fale Mais 60</CardTitle>
              <CardBody>
                60 Minutes para falar com quem você quiser sem pagar nada.
                <Image src="/free.png" width={80} height={80} />
              </CardBody>
            </Card>
            <Card bgimageUrl="/phone3.jpg">
              <CardTitle>Fale Mais 120</CardTitle>
              <CardBody>
                120 Minutes para falar com quem você quiser sem pagar nada.
                <Image src="/free.png" width={80} height={80} />
              </CardBody>
            </Card>
          </CardContainer>
        </SectionTwo>
        <SectionThree>
          <SectionTitle>Sobre nós</SectionTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nobis veritatis corporis voluptates id architecto vero repudiandae
            omnis fugit veniam consectetur libero, itaque porro facere similique
            laboriosam odit ad asperiores harum fugiat amet pariatur impedit
            excepturi. Eum temporibus assumenda ratione!
          </p>
        </SectionThree>
      </IndexContainer>
    </>
  )
}
