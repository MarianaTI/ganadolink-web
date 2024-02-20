import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import CustomUser from "@/components/CustomUser";
import { ContainerTabs, NavbarContainer, TabStyled } from "./index.style";

const CustomNavbar = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`Clicked on ${option}`);
    setIsDropdownOpen(false);
  };

  return (
    <React.Fragment>
      <NavbarContainer>
        <Link href="/" passHref>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="././img/Logo.png" alt="Logo" style={{ maxWidth: '150px', maxHeight: '50px' }} />
            <span style={{ marginLeft: '10px', fontFamily: 'Salsa, sans-serif', fontSize: '20px' }}>Ganado Link</span>
          </div>
        </Link>

        <ContainerTabs>
          <Link href="/" passHref>
            <TabStyled className={router.pathname === '/' ? 'active' : ''}>Home</TabStyled>
          </Link>
          <Link href="/form" passHref>
            <TabStyled className={router.pathname === '/form' ? 'active' : ''}>Formularios</TabStyled>
          </Link>
          <Link href="/catal" passHref>
            <TabStyled className={router.pathname === '/catal' ? 'active' : ''}>Catálogo</TabStyled>
          </Link>
        </ContainerTabs>

        <CustomUser
          isOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
          handleOptionClick={handleOptionClick}
        />
        
      </NavbarContainer>
    </React.Fragment>
  );
};

export default CustomNavbar;