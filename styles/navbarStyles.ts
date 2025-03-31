'use client';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0b132b;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    color: #f4ce77;
  }
`;

export const Logo = styled(Image)`
  width: auto;
  height: 60px;
`;