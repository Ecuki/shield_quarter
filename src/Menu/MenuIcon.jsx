import React from 'react';
import styled from 'styled-components';
import { Menu2Outline } from '@styled-icons/evaicons-outline/Menu2Outline';
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid #ddd;
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.powderWhite};
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.powderWhite};
  }
`;

const StyledIcon = styled(Menu2Outline)`
  background-color: ${({ theme }) => theme.colors.blueFilter};
  color: ${({ theme }) => theme.colors.blue};
  padding: 0;
  margin: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.powderWhite};
`;

function MenuIcon({ toggleVisibility }) {
  return (
    <Container className="menu__icon">
      <StyledIcon onClick={toggleVisibility} />
    </Container>
  );
}

export default MenuIcon;
