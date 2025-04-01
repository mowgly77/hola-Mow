'use client';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { Container, Main, Title } from '../styles/homeStyles';
import { getEntradas } from "../components/lib/entradas";
import { useEffect, useState } from 'react';

interface EntradaBlog {
  id?: number;
  title?: string;

}

export function Blog() {
  const [posts, setPosts] = useState<EntradaBlog[]>([]);

  useEffect(() => {
    getEntradas().then(setPosts);
    console.log(posts, "posts")
  }, []);

  return (
    <div>
      <h1>Notas del blog</h1>
      <ul>
        {posts.map((post: EntradaBlog) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

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
          <>
          <Blog></Blog>
          </>
        </Main>
      </Container>
    </>
  );
}