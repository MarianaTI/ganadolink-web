import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import CustomUser from "@/components/CustomUser";
import {
  IconMenu,
  LogoStyled,
  Menu,
  NavStyled,
  TabStyled,
} from "./index.style";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import CustomButton from "../CustomButton";

const CustomNavbar = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authToken = Cookies.get("authToken");
    setIsLoggedIn(!!authToken);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`Clicked on ${option}`);
    setIsDropdownOpen(false);
  };

  const handleSignOut = () => {
    try {
      Cookies.remove("authToken");
      router.push("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleSignIn = () => {
    try {
      router.push("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <NavStyled>
          <Link href="/" passHref>
            <LogoStyled>
              <img src="/img/Logo.png" width="50px" height="60px" />
              <span>GanadoLink</span>
            </LogoStyled>
          </Link>
          <Menu onClick={toggleMenu}>
            <IconMenu icon={faBars} />
          </Menu>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link href="/" passHref>
                <TabStyled className={router.pathname === "/" ? "active" : ""}>
                  Home
                </TabStyled>
              </Link>
            </li>
            <li>
              <Link href="/form" passHref>
                <TabStyled
                  className={router.pathname === "/form" ? "active" : ""}
                >
                  Formularios
                </TabStyled>
              </Link>
            </li>
            <li>
              <Link href="/catalogue" passHref>
                <TabStyled
                  className={router.pathname === "/catalogue" ? "active" : ""}
                >
                  Catalogo
                </TabStyled>
              </Link>
            </li>
            <li>
              <Link href="/users" passHref>
                <TabStyled
                  className={router.pathname === "/users" ? "active" : ""}
                >
                  Usuarios
                </TabStyled>
              </Link>
            </li>
            <li className="closeSession" onClick={handleSignOut}>
              <Link href="/login">Cerrar sesión</Link>
            </li>
          </ul>
          <CustomUser
            isOpen={isDropdownOpen}
            toggleDropdown={toggleDropdown}
            handleOptionClick={handleOptionClick}
          />
        </NavStyled>
      ) : (
        <NavStyled>
          <Link href="/" passHref>
            <LogoStyled>
              <img src="/img/Logo.png" width="50px" height="60px" />
              <span>GanadoLink</span>
            </LogoStyled>
          </Link>
          <CustomButton buttonText="Iniciar sesión" onClick={handleSignIn} customLogin/>
        </NavStyled>
      )}
    </div>
  );
};

export default CustomNavbar;
