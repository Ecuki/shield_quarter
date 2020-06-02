import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 60px;
  color: ${({ theme }) => theme.colors.powderWhite};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 5px;
  box-shadow: 0px 0px 10px #333;
  transition: all 0.1s ease;

  font-size: ${({ theme }) => theme.fontSizes.medium};

  :hover {
    box-shadow: 0px 0px 5px #666;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default function({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}
