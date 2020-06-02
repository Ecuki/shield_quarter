import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  max-width: 600px;

  padding: 0 20px 30px 40px;
  @media (min-width: 768px) {
    margin-left: 50px;
  }
  li {
    position: relative;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.blue};
    letter-spacing: 2px;
    padding: 10px 0;
    text-align: justify;
    ::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: -20px;
      margin: auto;
      width: 10px;
      height: 10px;
      background-color: ${({ theme }) => theme.colors.grey};
      border-radius: 50%;
      transition: all 0.15s ease;
    }
    :hover {
      ::before {
        background-color: ${({ theme }) => theme.colors.lightBlue};
      }
    }
  }
`;

export default function({ items, children }) {
  return (
    <>
      {children}
      <List>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </List>
    </>
  );
}
