import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ShieldQuarter } from '@styled-icons/boxicons-regular/ShieldQuarter';

const Container = styled.div`
  span:nth-of-type(1) {
    color: ${({ theme }) => theme.colors.powderWhite};
  }
`;
const StyledShield = styled(ShieldQuarter)`
  width: 60px;
  max-height: 50px;
  color: ${({ theme }) => theme.colors.powderWhite};
  padding-right: ${({ theme }) => `${theme.padding}px`};
`;
function Logo() {
  return (
    <Container className="logo">
      <Link to="/">
        <StyledShield>Shield</StyledShield>
        <span>Shield</span>
        <span>Quarter</span>
      </Link>
    </Container>
  );
}
export default Logo;
