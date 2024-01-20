import React from "react";
import Link from 'next/link';
import { NavbarContainer, Tabs, Tab, UserIcon } from '../styles/navbar.style';
import { Smartphone, User } from 'react-feather';

const CustomNavbarPage = () => {
  return (
    <React.Fragment>
      <NavbarContainer>
        <Smartphone size={32} />

        <Tabs>
          <Link href="/">
            <Tab>Home</Tab>
          </Link>
          <Link href="/formularios">
            <Tab>Formularios</Tab>
          </Link>
          <Link href="/catalogo">
            <Tab>Catalogo</Tab>
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