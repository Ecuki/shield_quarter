import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const StyledItem = styled(Link)`
  color: ${({ theme }) => theme.colors.powderWhite};
  transition: all 0.1s ease;
  box-shadow: 0 0 1px 3px rgba(1, 1, 1, 0.1) inset;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-transform: capitalize;
  :hover {
    transform: scale(1.05);
    color: white;
  }
`;

const MenuBarItem = ({ route, handleItemClick, activeItem }) => {
  return (
    <StyledItem
      name={route.name}
      active={activeItem === route.name}
      onClick={handleItemClick}
      smooth={route?.smooth}
      to={route.to}
    >
      {route.name.replace('-', ' ')}
    </StyledItem>
  );
};
export default MenuBarItem;
