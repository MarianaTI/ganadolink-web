import React from "react";
import Link from 'next/link';
import { NavbarContainer, Tabs, Tab, UserIcon } from '../styles/navbar.style';
import { Smartphone, User } from 'react-feather';
import { useRouter } from 'next/router';

const CustomNavbarPage = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <NavbarContainer>
        <Smartphone size={32} />

        <Tabs>
          <Link href="/" passHref>
            <Tab className={router.pathname === '/' ? 'active' : ''}>Home</Tab>
          </Link>
          <Link href="/formularios" passHref>
            <Tab className={router.pathname === '/formularios' ? 'active' : ''}>Formularios</Tab>
          </Link>
          <Link href="/catalogo" passHref>
            <Tab className={router.pathname === '/catalogo' ? 'active' : ''}>Catalogo</Tab>
          </Link>
        </Tabs>

        <UserIcon>
          <User size={24} />
        </UserIcon>
      </NavbarContainer>
    </React.Fragment>
  );
};

export default CustomNavbarPage;