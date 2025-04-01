// app/page.tsx
'use client';

import Image from 'next/image';
import logo from '../public/BM_Logo_Gold-White.png';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { Container, Main, Title } from '../styles/homeStyles';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Inicio | Brick & Mortar</title>
        <meta name="description" content="Brick & Mortar: Diseño, Desarrollo Web, VTEX y más." />
      </Head>
      <Container>
        <Navbar />
        <Main>
          <Image src={logo} alt="Logo Brick & Mortar" width={200} priority />
          <Title>BRICK & MORTAR</Title>
        </Main>
      </Container>
    </>
  );
}
