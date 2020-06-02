import React from 'react';
import styled from 'styled-components';
import Introduction from '../components/Introduction';
import Heading from '../components/Heading';
import Section from '../components/Section';
import Image from '../components/Image';
import laptop1 from '../assets/laptop1.jpg';
import office1 from '../assets/office1.jpg';
import office2 from '../assets/office2.jpg';

const etaps = [
  {
    id: 1,
    name: 'Planning',
    description:
      'During this initial stage of the project, the team sits together with the project and product manager to agree on a number of factors that will influence the development process.',
  },
  {
    id: 2,
    name: 'Analysis',
    description:
      'Business and development teams need to communicate at some point about the business requirements of the project. If they fail to do so, the software might be irrelevant to the user group the company is looking to engage.',
  },
  {
    id: 3,
    name: 'Design and prototyping',
    description:
      'Once the team understands the project requirements, software architects and developers set down to design the application architecture. The design process consists of standardized patterns used for both architecture and software development.',
  },
  {
    id: 4,
    name: 'Programming',
    description:
      'In this phase, the development team is busy coding the software. Depending on the methodology, the process might either be carried out in time-boxed sprints or follow a single block of effort (in the case of the waterfall).',
  },
  {
    id: 5,
    name: 'Testing',
    description:
      'The testing phase is key because delivering quality software without testing is next to impossible. Developers test for code quality, performing unit testing, integration testing, performance testing, and security testing.',
  },
  {
    id: 6,
    name: 'Deployment',
    description:
      'Experienced software development agencies usually automate this process using a Continuous Integration model – with the help of a tool like Jenkins.',
  },
  {
    id: 7,
    name: 'Maintenance',
    description:
      'Once the building phase is over, the development team monitors the software to make sure it’s operating properly. If bugs or defects are discovered in production, the team addresses them instantly.',
  },
];
const Etap = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  filter: brightness(${({ index }) => 1 + index / 10});
`;
const StyledSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.blue};
`;
function Process() {
  return (
    <Section id="process">
      <StyledSection>
        <Introduction>How do we work?</Introduction>
        {etaps.map((etap, index) => (
          <Etap key={etap.id} index={index}>
            <Heading size="medium" color="lightBlue">
              <strong>{etap.name}</strong>
            </Heading>
            <Heading size="small" color="powderWhite">
              {etap.description}
            </Heading>
          </Etap>
        ))}
      </StyledSection>

      <Heading size="medium" color="blue">
        In software engineering, a <strong>software development process</strong>{' '}
        is the process of dividing software development work into distinct
        phases to improve design, product management, and project management. It
        is also known as a software development life cycle.
      </Heading>
      <Image src={laptop1} />
      <Image src={office1} />
      <Heading size="medium" color="blue">
        One popular solution on how to optimize single-page applications for SEO
        involves the use of Isomorphic React. An isomorphic web app gives you
        the best of both server-side rendering and single-page application by
        automatically detecting if the client supports JavaScript and running
        JavaScript server-side if it doesn’t and client-side if it does.
      </Heading>
      <Image src={office2} />
    </Section>
  );
}
export default Process;
