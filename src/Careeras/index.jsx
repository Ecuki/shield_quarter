import React from 'react';
import BacgroundImage from '../components/BacgroundImage';
import Hero from '../components/Hero';
import heroImage from '../assets/hero-bgi.jpg';

import CallToAction from '../components/CallToAction';

import Perks from './Perks';
import Jobs from './Jobs';
import Contact from '../components/Contact';
export default function index() {
  return (
    <>
      <BacgroundImage image={heroImage}>
        <Hero
          header="Work With Us"
          subheader="Choose your own adventure. This isn’t your typical work from home job. Everyone works from the location they choose."
        >
          <CallToAction to="/careers/#jobs" />
        </Hero>
      </BacgroundImage>
      <Perks />
      <Jobs />
      <Contact
        header={
          "Didn't find a suitable position for you? Let us know that you are interested!"
        }
        subheader="So you love the idea behind Shield Quarter, would like to be a part of our amazing team, but can't find a position that would be a good match for your skills and experience?"
      />
    </>
  );
}
