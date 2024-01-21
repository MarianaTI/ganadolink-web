import React, { useRef, useEffect } from 'react';
import { DropdownContainer, Option } from './index.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { User } from 'react-feather';
import { UserIcon } from '../CustomNavbar/index.style';

const CustomUser = ({ isOpen, toggleDropdown, handleOptionClick }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        toggleDropdown();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [toggleDropdown]);

  const handleUserIconClick = (event) => {
    event.stopPropagation();
    toggleDropdown();
  };

  return (
    <div>
      <UserIcon onClick={handleUserIconClick}>
        <User size={24} />
      </UserIcon>

      {isOpen && (
        <DropdownContainer ref={dropdownRef} isOpen={isOpen}>
          <Option className="option" onClick={() => handleOptionClick('Configuración')}>
            <FontAwesomeIcon icon={faCog} />Configuración de Usuario
          </Option>
          <Option className="option" onClick={() => handleOptionClick('Cerrar Sesión')}>
            <FontAwesomeIcon icon={faSignOutAlt} />Cerrar Sesión
          </Option>
        </DropdownContainer>
      )}
    </div>
  );
};

export default CustomUser;