import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import Section from '../components/Section';
import Image from '../components/Image';
import Description from '../components/Description';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import person4 from '../assets/person4.jpg';
import person5 from '../assets/person5.jpg';

const StyledSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.blue};
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
`;
const TeamMember = styled(Section)`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  @media (min-width: 1024px) {
    width: 50%;
  }
`;
const StyledHeading = styled(Heading)`
  padding-bottom: 5px;
  padding-top: 5px;
`;
const team = [
  {
    id: 1,
    name: 'Victoria C. Frankel',
    position: 'CTO',
    img: person1,
  },
  {
    id: 2,
    name: 'James M. Veney',
    position: 'frontend developer',
    img: person2,
  },
  {
    id: 3,
    name: 'Janet J. Grantham',
    position: 'backend developer',
    img: person3,
  },
  {
    id: 4,
    name: 'Heather J. Orr',
    position: 'designer',
    img: person4,
  },
  {
    id: 5,
    name: 'Victor M. Clear',
    position: 'project manager',
    img: person5,
  },
];
export default function Team() {
  return (
    <StyledSection>
      <Heading size="large" color="white">
        Team
      </Heading>
      {team.map((member) => (
        <TeamMember key={member.id}>
          <Image src={member.img} />
          <StyledHeading size="medium" color="white">
            {member.name}
          </StyledHeading>
          <StyledHeading size="small" color="powderWhite">
            <Description>{member.position}</Description>
          </StyledHeading>
        </TeamMember>
      ))}
    </StyledSection>
  );
}
