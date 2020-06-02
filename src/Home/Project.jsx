import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import Image from '../components/Image';
import Description from '../components/Description';
import Heading from '../components/Heading';

const Project = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 20px 30px;
  h2 {
    padding-left: 0;
  }
`;

const StyledHeading = styled(Heading)`
  text-align: left;
  padding-top: 0;
`;

export default ({ project: { id, to, image, title, description } }) => (
  <Project key={id} to={`/projects/${to}`}>
    <Image src={image} />
    <Heading size="large" color="blue">
      {title}
    </Heading>
    <StyledHeading size="small" color="blue">
      {description}
    </StyledHeading>
    <Description>See more</Description>
  </Project>
);
