import React, { useRef, useEffect, use, useState } from "react";
import { Container, DropdownContainer, Option, OptionDisable } from "./index.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { User } from "react-feather";
import { UserIcon } from "../CustomNavbar/index.style";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const CustomUser = ({ isOpen, toggleDropdown, handleOptionClick }) => {
  const name = useSelector((state) => state.user.name);
  const route = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [userName, setUserName] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        toggleDropdown();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [toggleDropdown]);

  const handleUserIconClick = (event) => {
    event.stopPropagation();
    toggleDropdown();
  };

  const handleSignOut = () => {
    try {
      Cookies.remove('authToken');
      route.push("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  useEffect(() => {
    setIsClient(true)
    const userLogged = JSON.parse(sessionStorage.getItem("authToken"));
    setUserName(name);
  })

  return (
    <Container>
      <UserIcon onClick={handleUserIconClick}>
        <User size={24} />
      </UserIcon>
      {isOpen && (
        <DropdownContainer ref={dropdownRef} isOpen={isOpen}>
          <OptionDisable>
            {isClient ? name : "Cargando"}
          </OptionDisable>
          <Option className="option" onClick={handleSignOut}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Cerrar Sesión
          </Option>
        </DropdownContainer>
      )}
    </Container>
  );
};

export default CustomUser;
