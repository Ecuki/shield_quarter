import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.div`
  height: 50vh;
  min-height: 200px;
  width: 100%;
  max-width: 1200px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
  @media (min-width: 1024px) {
    min-height: 500px;
  }
`;

export default function Image(props) {
  return <StyledImage {...props} />;
}
