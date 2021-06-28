import React from 'react'
import Head from 'next/head'
import { SectionOne } from '../components/SectionOne'
import { SectionTwo } from '../components/SectionTwo'
import { SectionThree } from '../components/SectionThree'
import { SectionFour } from '../components/SectionFour'

import { IndexContainer } from '../styles/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Telzir</title>
      </Head>
      <IndexContainer>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </IndexContainer>
    </>
  )
}
