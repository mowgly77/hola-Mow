'use client';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { Container, Main, Title } from '../styles/homeStyles';

export default function Influencia() {
  return (
    <>
      <Head>
        <title>Influencia | Brick & Mortar</title>
        <meta name="description" content="Estrategias de marketing de influencia y contenido." />
      </Head>
      <Container>
        <Navbar />
        <Main>
          <Title>Influencia</Title>
        </Main>
      </Container>
    </>
  );
}