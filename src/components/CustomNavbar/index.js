import React, { useState } from "react";
import Link from 'next/link';
import { Smartphone, User } from 'react-feather';
import { useRouter } from 'next/router';
import CustomUser from "@/components/CustomUser";
import { ContainerTabs, NavbarContainer, TabStyled } from "./index.style";

const CustomNavbarPage = () => {
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
        <Smartphone size={32} />

        <ContainerTabs>
          <Link href="/" passHref>
            <TabStyled className={router.pathname === '/' ? 'active' : ''}>Home</TabStyled>
          </Link>
          <Link href="/formularios" passHref>
            <TabStyled className={router.pathname === '/formularios' ? 'active' : ''}>Formularios</TabStyled>
          </Link>
          <Link href="/catalogo" passHref>
            <TabStyled className={router.pathname === '/catalogo' ? 'active' : ''}>Catalogo</TabStyled>
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

export default CustomNavbarPage;