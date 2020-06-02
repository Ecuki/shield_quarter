import React from 'react';
import styled from 'styled-components';

const StyledIntroduction = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  padding: 40px 0 10px;
`;

export default function Introduction({ children }) {
  return <StyledIntroduction>{children}</StyledIntroduction>;
}
