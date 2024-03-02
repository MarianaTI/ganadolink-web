import React, { useRef, useEffect } from "react";
import { DropdownContainer, Option } from "./index.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { User } from "react-feather";
import { UserIcon } from "../CustomNavbar/index.style";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const CustomUser = ({ isOpen, toggleDropdown, handleOptionClick }) => {
  const route = useRouter();
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

  return (
    <div>
      <UserIcon onClick={handleUserIconClick}>
        <User size={24} />
      </UserIcon>
      {isOpen && (
        <DropdownContainer ref={dropdownRef} isOpen={isOpen}>
          <Option className="option" onClick={handleSignOut}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Cerrar Sesión
          </Option>
        </DropdownContainer>
      )}
    </div>
  );
};

export default CustomUser;
