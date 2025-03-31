// app/page.tsx
'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/BM_Logo_Gold-White.png'; // Asegúrate de guardar tu logo como 'logo-bm.png' en la carpeta public

const Container = styled.div`
  min-height: 100vh;
  background-color: #0b132b;
  color: #f4ce77;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    color: #f4ce77;
  }
`;

const Logo = styled(Image)`
  width: auto;
  height: 60px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
`;

export default function Home() {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Brick & Mortar Logo" width={100} height={60} priority />
        <Nav>
          <NavLink href="/diseno">Diseño</NavLink>
          <NavLink href="/influencia">Influencia</NavLink>
          <NavLink href="/desarrollo-web">Desarrollo Web</NavLink>
          <NavLink href="/desarrollo-vtex">Desarrollo VTEX</NavLink>
          <NavLink href="/marketing-digital">Marketing Digital</NavLink>
          <NavLink href="/booking">Booking Form</NavLink>
        </Nav>
      </Header>
      <Main>
        <Image src={logo} alt="Logo Brick & Mortar" width={200} height={200} />
        <Title>BRICK & MORTAR</Title>
      </Main>
    </Container>
  );
}
