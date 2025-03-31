'use client';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { Container, Main, Title } from '../styles/homeStyles';

export default function Desarrolloweb() {
  return (
    <>
      <Head>
        <title>Desarrollo Web | Brick & Mortar</title>
        <meta name="description" content="Soluciones web personalizadas para tu negocio." />
      </Head>
      <Container>
        <Navbar />
        <Main>
          <Title>Desarrollo Web</Title>
        </Main>
      </Container>
    </>
  );
}