'use client';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { Container, Main, Title } from '../styles/homeStyles';

export default function Diseno() {
  return (
    <>
      <Head>
        <title>Diseño | Brick & Mortar</title>
        <meta name="description" content="Servicios de diseño de marca, UI/UX, y creatividad digital." />
      </Head>
      <Container>
        <Navbar />
        <Main>
          <Title>Diseño</Title>
        </Main>
      </Container>
    </>
  );
}