'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/BM_Logo_Gold-White.png';
import { Header, Nav, NavLink, Logo } from '../styles/navbarStyles';

export default function Navbar() {
  return (
    <Header>
      <Logo src={logo} alt="Brick & Mortar Logo" width={100} height={60} priority />
      <Nav>
        <NavLink href="/diseno">Diseño</NavLink>
        <NavLink href="/influencia">Influencia</NavLink>
        <NavLink href="/desarrollo-web">Desarrollo Web</NavLink>
        <NavLink href="/desarrollo-vtex">Desarrollo VTEX</NavLink>
        <NavLink href="/marketing-digital">Marketing Digital</NavLink>
        <NavLink href="/booking">Booking</NavLink>
      </Nav>
    </Header>
  );
}