'use client';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { Container, Main, Title } from '../styles/homeStyles';

export default function Booking() {
  return (
    <>
      <Head>
        <title>Booking | Brick & Mortar</title>
        <meta name="description" content="Reserva una consultoría con Brick & Mortar." />
      </Head>
      <Container>
        <Navbar />
        <Main>
          <Title>Booking</Title>
        </Main>
      </Container>
    </>
  );
}