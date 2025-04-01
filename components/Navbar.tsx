'use client';
import logo from '../public/BM_Logo_Gold-White.png';
import Image from 'next/image';
import { Header, Nav, NavLink } from '../styles/navbarStyles';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Header>
              <NavLink href="/"><Image 
        src={logo} 
        alt="Brick & Mortar Logo" 
        width={100}
        priority
      /></NavLink>

      
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