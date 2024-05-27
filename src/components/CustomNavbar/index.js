import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import CustomUser from "@/components/CustomUser";
import {
  IconMenu,
  LoginButton,
  LogoStyled,
  Menu,
  NavStyled,
  TabStyled,
} from "./index.style";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

const CustomNavbar = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userRole = useSelector((state) => state.user.rol);

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
    <>
      {isLoggedIn ? (
        <NavStyled>
          <Link href="/" passHref>
            <LogoStyled>
              <img src="/img/ganadolink-icon.png" />
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
              <Link href="/guide" passHref>
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
            {userRole === "SuperAdmin" && (
              <li>
                <Link href="/user" passHref>
                  <TabStyled
                    className={router.pathname === "/user" ? "active" : ""}
                  >
                    Usuarios
                  </TabStyled>
                </Link>
              </li>
            )}
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
          <LoginButton onClick={handleSignIn}>
            <span>Iniciar sesión</span>
            <svg
              width="34"
              height="34"
              viewBox="0 0 74 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                fill="#f27d16"
              ></path>
            </svg>
          </LoginButton>
        </NavStyled>
      )}
    </>
  );
};

export default CustomNavbar;
