import React from 'react';
import styled from 'styled-components';

const StyledDescription = styled.div`
  text-transform: uppercase;
`;
export default function Description({ children, ...rest }) {
  return <StyledDescription {...rest}>{children}</StyledDescription>;
}
