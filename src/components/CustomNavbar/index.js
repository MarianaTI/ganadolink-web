import React, { useState } from "react";
import Link from "next/link";
import { Smartphone, User } from "react-feather";
import { useRouter } from "next/router";
import CustomUser from "@/components/CustomUser";
import {
  ContainerTabs,
  LogoStyled,
  NavbarContainer,
  TabStyled,
} from "./index.style";

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
    <NavbarContainer>
      <LogoStyled>
        <img src="/img/Logo.png" width="50px" height="60px" />
        <span>GanadoLink</span>
      </LogoStyled>
      <ContainerTabs>
        <Link href="/" passHref>
          <TabStyled className={router.pathname === "/" ? "active" : ""}>
            Home
          </TabStyled>
        </Link>
        <Link href="/form" passHref>
          <TabStyled className={router.pathname === "/form" ? "active" : ""}>
            Formularios
          </TabStyled>
        </Link>
        <Link href="/catalogo" passHref>
          <TabStyled
            className={router.pathname === "/catalogo" ? "active" : ""}
          >
            Catalogo
          </TabStyled>
        </Link>
      </ContainerTabs>

      <CustomUser
        isOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
        handleOptionClick={handleOptionClick}
      />
    </NavbarContainer>
  );
};

export default CustomNavbar;
