import React from 'react';

import BacgroundImage from '../components/BacgroundImage';
import heroImage from '../assets/hero-bgi.jpg';
// import styled from 'styled-components';
import Hero from '../components/Hero';
import AboutUs from './AboutUs';
import Contact from '../components/Contact';
import CallToAction from '../components/CallToAction';

// import { Responsive } from 'semantic-ui-react';
import Services from './Services';
import Process from './Process';
import OurWork from './OurWork';
import Team from './Team';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
const projects = [
  {
    id: 1,
    to: 'chart-app',
    image: project1,
    title: 'Chart App',
    description:
      'Chart tools are powerful, simple to use, and free. Try out our rich gallery of interactive charts and data tools.',
  },

  {
    id: 2,
    to: 'design-app',
    image: project2,
    title: 'Design App',
    description:
      'Bring your design ideas to life with the iOS & Android Desygner Apps. Update and share your work from a computer, tablet or phone.',
  },
  {
    id: 3,
    to: '3D-photos',
    image: project3,
    title: '3D Photos',
    description:
      'This 3D Photo app has accumulated over 15 million users over the last few years and with the rise of 3D Photos this year has attracted a massive following in 2019.',
  },
];

function Home() {
  return (
    <>
      <BacgroundImage image={heroImage}>
        <Hero
          header="We are leading Software consulting company"
          subheader="Quality and experience for hire since 1969"
        >
          <CallToAction to="/#about-us" />
        </Hero>
      </BacgroundImage>

      <AboutUs />
      <Services />
      <Process />
      <OurWork projects={projects} />
      <Team />
      <Contact header="Contact us" subheader="What can we help you with?" />
    </>
  );
}

export default Home;
