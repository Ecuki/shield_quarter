import React, { useContext } from 'react';
import styled from 'styled-components';
import { JobsContext } from './Jobs';

const ShowMore = styled.button`
  position: relative;
  display: block;
  justify-content: flex-start;
  height: 40px;
  width: 40px;
  border: 0px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: 15px;

  transition: all 0.1s ease;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.lightBlue};
    ::before,
    ::after {
      background-color: ${({ theme }) => theme.colors.lightBlue};
    }
  }
  ::before,
  ::after {
    content: '';
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    position: absolute;
    width: 70%;
    height: 4px;
    background-color: ${({ theme, isOpen }) =>
      theme.colors[isOpen ? 'lightBlue' : 'grey']};
    transform-origin: center;
    transition: all 0.3s ease;
  }
  ::after {
    transform: rotate(${({ isOpen }) => (isOpen ? '0deg' : '360deg')});
  }
  ::before {
    transform: rotate(${({ isOpen }) => (isOpen ? '90deg' : '450deg')});
    height: ${({ isOpen }) => (isOpen ? 0 : '4px')};
  }
`;

export default function({ id }) {
  const { isActiveJob, toggleActiveJob } = useContext(JobsContext);
  return (
    <ShowMore isOpen={isActiveJob(id)} onClick={() => toggleActiveJob(id)} />
  );
}
