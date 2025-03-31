'use client';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { Container, Main, Title } from '../styles/homeStyles';

export default function Marketingdigital() {
  return (
    <>
      <Head>
        <title>Marketing Digital | Brick & Mortar</title>
        <meta name="description" content="Campañas y estrategia digital integradas." />
      </Head>
      <Container>
        <Navbar />
        <Main>
          <Title>Marketing Digital</Title>
        </Main>
      </Container>
    </>
  );
}