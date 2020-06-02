import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-height: 100%;
  color: ${({ theme }) => theme.colors.powderWhite};
  padding: 0 ${({ theme }) => `${theme.padding}px`} 0;
  letter-spacing: 2px;
`;
const Header = styled.h1`
  display: block;

  font-size: ${({ theme }) => theme.fontSizes.large};
  padding: 0;
  margin: 0;
  text-align: center;
  padding: ${({ theme }) => `${theme.padding * 9}px 0 ${theme.padding * 2}px`};
  max-width: 700px;
`;
const SubHeader = styled.p`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: center;
  letter-spacing: 1px;
  max-width: 700px;
`;
export default function Hero({ children, header, subheader }) {
  return (
    <Container>
      <Header>{header}</Header>
      <SubHeader>{subheader}</SubHeader>
      {children}
    </Container>
  );
}
