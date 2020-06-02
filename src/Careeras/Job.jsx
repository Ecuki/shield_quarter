import React, { useContext } from 'react';
import Section from '../components/Section';
import Heading from '../components/Heading';
import { JobsContext } from './Jobs';
import ShowMore from './ShowMore';

import Description from './Description';
import styled from 'styled-components';

const Job = styled(Section)`
  width: 100%;
  max-width: 700px;
  margin: 0 auto 40px;
  border-bottom: 2px solid #ddd;

  background-color: ${({ theme }) => theme.colors.white};

  h2 {
    text-align: left;
    padding: 20px;
    width: 80%;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export default function({ job: { id, position, ...rest } }) {
  const { isActiveJob } = useContext(JobsContext);
  return (
    <Job size="small">
      <Header>
        <ShowMore id={id} />
        <Heading size="small" color="blue">
          {position}
        </Heading>
      </Header>

      {isActiveJob(id) && <Description {...rest} />}
    </Job>
  );
}
