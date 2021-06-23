import React from "react";
import Head from "next/head";
import Image from "next/image";

import styled from "styled-components";

const IndexContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: darkorchid;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <IndexContainer>
        <p>Index Page</p>
      </IndexContainer>
    </>
  );
}
