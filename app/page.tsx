// app/page.tsx
'use client';

import Image from 'next/image';
import logo from '../public/BM_Logo_Gold-White.png';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { Container, Main, Title } from '../styles/homeStyles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Brick & Mortar</title>
        <meta name="description" content="Brick & Mortar: Diseño, Desarrollo Web, VTEX y más." />
      </Head>
      <Container>
        <Navbar />
        <Main>
          <Image src={logo} alt="Logo Brick & Mortar" width={200} height={200} />
          <Title>BRICK & MORTAR</Title>
        </Main>
      </Container>
    </>
  );
}
