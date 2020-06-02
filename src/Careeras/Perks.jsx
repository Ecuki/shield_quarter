import React from 'react';
import Section from '../components/Section';
import { HomeHeart } from '@styled-icons/boxicons-solid/HomeHeart';
import { MoneyBillAlt } from '@styled-icons/fa-solid/MoneyBillAlt';
import { DirectionsBike } from '@styled-icons/material-sharp/DirectionsBike';
import { LocalBar } from '@styled-icons/material/LocalBar';
import { SettingsRemote } from '@styled-icons/material/SettingsRemote';
import Heading from '../components/Heading';
import styled from 'styled-components';
const perks = [
  {
    id: 1,
    description: 'Health insurance',
    Component: HomeHeart,
  },
  {
    id: 2,
    description: 'Paid time off, sick days, and vacation days',
    Component: MoneyBillAlt,
  },
  {
    id: 3,
    description: 'Multisport card',
    Component: DirectionsBike,
  },
  {
    id: 4,
    description: 'Team events',
    Component: LocalBar,
  },
  {
    id: 5,
    description: 'Remote work',
    Component: SettingsRemote,
  },
];
const Perk = styled(Section)`
  align-self: center;
  padding: 20px;
  color: ${({ theme }) => theme.colors.lightBlue};
  svg {
    max-height: 50px;
  }
`;
export default function Perks() {
  return (
    <Section>
      {perks.map(({ id, Component, description }) => (
        <Perk key={id}>
          <Component />
          <Heading size="large" color="blue">
            {description}
          </Heading>
        </Perk>
      ))}
    </Section>
  );
}
