import React, { useState } from 'react';
import Section from '../components/Section';
import Heading from '../components/Heading';
import Image from '../components/Image';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/boxicons-solid/ChevronRight';
import { ChevronLeft } from '@styled-icons/boxicons-solid/ChevronLeft';

const Carousel = styled(Section)`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.blue};

  button {
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0px 0px 10px #333;
    transition: all 0.1s ease;
    margin: 10px;
    :hover {
      box-shadow: 0px 0px 5px #666;
    }
  }
  svg {
    height: 70px;
    color: ${({ theme }) => theme.colors.lightBlue};
    z-index: 1;
  }
`;
const Icons = styled(Section)`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;

  width: 100%;
`;

export default function({ images, descriptions }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (value) => {
    let newActive = activeIndex + value;
    if (newActive < 0) newActive = images.length - 1;
    if (newActive > images.length - 1) newActive = 0;
    setActiveIndex(newActive);
  };

  return (
    <Carousel>
      <Heading size="medium" color="white">
        See more
      </Heading>
      <Image src={images[activeIndex].src} />
      <Icons>
        <button id="-" onClick={() => handleClick(-1)}>
          <ChevronLeft />
        </button>
        <button name="+" onClick={() => handleClick(1)}>
          <ChevronRight />
        </button>
      </Icons>
      <Heading size="small" color="white">
        {descriptions[activeIndex]}
      </Heading>
    </Carousel>
  );
}
