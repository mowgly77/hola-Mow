'use client';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { Container, Main, Title } from '../styles/homeStyles';

export default function Desarrollovtex() {
  return (
    <>
      <Head>
        <title>Desarrollo VTEX | Brick & Mortar</title>
        <meta name="description" content="Expertos en desarrollo e-commerce con VTEX." />
      </Head>
      <Container>
        <Navbar />
        <Main>
          <Title>Desarrollo VTEX</Title>
        </Main>
      </Container>
    </>
  );
}