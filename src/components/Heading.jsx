import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h2`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ size, theme }) => theme.fontSizes[size]};
  font-weight: 200;
  margin: 0;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: ${({ theme }) =>
    `${2 * theme.padding}px ${2 * theme.padding}px ${2 * theme.padding}px `};
  opacity: 0.83;
  letter-spacing: 2px;
  line-height: ${({ size, theme }) => 1.2 * theme.fontSizes[size]};
`;

export default function Heading(props) {
  return <StyledHeading {...props} />;
}
