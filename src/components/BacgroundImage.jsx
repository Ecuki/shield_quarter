import React from 'react';
import styled from 'styled-components';

const BacgroundImage = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.blueFilter};
    z-index: -1;
  }
`;

export default function({ children, ...rest }) {
  return <BacgroundImage {...rest}>{children}</BacgroundImage>;
}
