import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Heading from '../components/Heading';
const Footer = styled.div`
  width: 100%;

  padding: 40px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  .logo {
    display: flex;
    justify-content: center;
    width: 50%;
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 10px;
  }
`;
export default function() {
  return (
    <Footer>
      <Heading size="medium" color="blue">
        ShieldQuarter.com
      </Heading>
      <Heading size="small" color="blue">
        All rights reserved 2020 © Shield Quarter
      </Heading>
      <Logo />
    </Footer>
  );
}
