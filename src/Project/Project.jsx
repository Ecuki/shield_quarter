import React from 'react';
import Section from '../components/Section';
import Heading from '../components/Heading';
import Image from '../components/Image';
const Project = ({ images }) => {
  return (
    <Section id="project">
      {images.map((img, index) => (
        <Section key={index}>
          <Heading size="large" color="lightBlue">
            Descrption {index + 1}
          </Heading>
          <Image src={img.src} />
          <Heading size="small" color="blue">
            {img.description}
          </Heading>
        </Section>
      ))}
    </Section>
  );
};

export default Project;
