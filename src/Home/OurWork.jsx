import React from 'react';

import styled from 'styled-components';
import Introduction from '../components/Introduction';

import Section from '../components/Section';
import Project from './Project';

import Button from '../components/Button';

const StyledSection = styled(Section)`
  padding-bottom: 30px;
  a {
    align-self: center;
  }
`;

function OurWork({ projects }) {
  return (
    <StyledSection id="our-work">
      <Introduction>Our work</Introduction>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
      <Button> Other projects</Button>
    </StyledSection>
  );
}
export default OurWork;
