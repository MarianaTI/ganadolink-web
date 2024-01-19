import React from "react";
import Link from 'next/link';
import { NavbarContainer, Tabs, UserIcon } from '../styles/navbar.style';
import { Smartphone, User } from 'react-feather';

const CustomNavbarPage = () => {
  return (
    <React.Fragment>
      <NavbarContainer>
        <Smartphone size={32} />
        
        <Tabs>
          <Link href="/">
            Home
          </Link>
          <Link href="/formularios">
            Formularios
          </Link>
          <Link href="/catalogo">
            Catalogo
          </Link>
        </Tabs>
        
        <User size={24} />
      </NavbarContainer>
    </React.Fragment>
  );
};

export default CustomNavbarPage;