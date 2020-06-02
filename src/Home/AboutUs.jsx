import React from 'react';

import Introduction from '../components/Introduction';
import Image from '../components/Image';
import Heading from '../components/Heading';
import Section from '../components/Section';
import workplaceImage from '../assets/workplace.jpg';
import workplaceImage2 from '../assets/workplace2.jpg';

function AboutUs() {
  return (
    <Section id="about-us">
      <Introduction>Who we are?</Introduction>
      <Heading size="large" color="blue">
        <strong>React.js</strong> is an open-source JavaScript library that is
        used for building user interfaces specifically for single-page
        applications.
      </Heading>
      <Image src={workplaceImage} />
      <Heading size="medium" color="blue">
        <strong>React.js</strong> can be used as a base in the development of
        single-page or mobile applications. However, React is only concerned
        with rendering data to the DOM, and so creating React applications
        usually requires the use of additional libraries for state management
        and routing.
      </Heading>
      <Image src={workplaceImage2} />
    </Section>
  );
}
export default AboutUs;
