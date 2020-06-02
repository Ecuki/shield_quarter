import React from 'react';
import styled from 'styled-components';
const Section = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.padding};
  background-color: ${({ theme, bgcolor }) =>
    bgcolor ? theme.colors[bgcolor] : theme.colors['white']};
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;
export default function({ children, ...rest }) {
  return <Section {...rest}>{children}</Section>;
}
