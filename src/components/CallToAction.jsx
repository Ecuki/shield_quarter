import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled, { keyframes } from 'styled-components';
import Description from './Description';

const Container = styled(Link)`
  color: ${({ theme }) => theme.colors.powderWhite};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const fallDown = keyframes`
  0% {
    top: 5px;
    opacity:1
  }

  70% {
    top: 80%;
    opacity:0;
  }
 100% {
    top: 80%;
    opacity:0;
  }
`;
const Button = styled.div`
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.lightBlue};
  width: 30px;
  height: 60px;
  margin-bottom: 40px;
  border-radius: 15px;
  @media (max-height: 400px) {
    margin-bottom: 10px;
  }
  ::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.powderWhite};
    height: 10px;
    width: 10px;
    border-radius: 50%;
    animation: ${fallDown} 1.5s ease-in-out 0.3s infinite;
  }
`;

function CallToAction({ to }) {
  return (
    <Container smooth to={to}>
      <Button />
      <Description>Scroll down to see more</Description>
    </Container>
  );
}
export default CallToAction;
