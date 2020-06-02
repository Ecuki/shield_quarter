import React from 'react';

import Introduction from '../components/Introduction';
import Heading from '../components/Heading';
import Section from '../components/Section';

function Services() {
  return (
    <Section id="services">
      <Introduction>What can we do for you?</Introduction>
      <Heading size="large" color="lightBlue">
        <strong>React Development</strong>
      </Heading>
      <Heading size="medium" color="blue">
        <strong>Our React </strong> services include both React app development
        and consulting support. React JS is a core part of our app development
        expertise. Yes, you can build cool interfaces with other technologies
        too, but <strong>React lets you do it easily</strong> using the
        declarative components.
      </Heading>

      <Heading size="large" color="lightBlue">
        <strong>Native Development For Everyone</strong>
      </Heading>
      <Heading size="medium" color="blue">
        <strong>React Native </strong> combines the best parts of native
        development with React, a best-in-class JavaScript library for building
        user interfaces. Use a little—or a lot. You can use React Native today
        in your existing <strong>Android</strong> and <strong>iOS</strong>
        projects or you can create a whole new app from scratch.
      </Heading>
    </Section>
  );
}
export default Services;
