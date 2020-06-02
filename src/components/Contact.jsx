import React from 'react';
import styled from 'styled-components';
import BacgroundImage from './BacgroundImage';
import Hero from './Hero';
import Button from './Button';
import contactImage from '../assets/contact-bgi.jpg';
export default function(props) {
  const Contact = styled(BacgroundImage)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: auto;
    max-height: 700px;
    padding-bottom: 40px;
    h1 {
      padding-top: 40px;
    }
    a {
      margin-bottom: 10px;
    }
  `;
  return (
    <Contact image={contactImage} id="contact">
      <Hero {...props}>
        <Button>Chat</Button>
      </Hero>
    </Contact>
  );
}
