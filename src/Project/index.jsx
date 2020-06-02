import React from 'react';
import { useParams } from 'react-router-dom';
import BacgroundImage from '../components/BacgroundImage';
import Hero from '../components/Hero';
import heroImage from '../assets/hero-bgi.jpg';
import CallToAction from '../components/CallToAction';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import Project from './Project';
import { useState } from 'react';
import { useEffect } from 'react';
import Carousel from './Carousel';

const projects = [
  {
    id: 1,
    to: 'chart-app',
    title: 'Chart App',
    subTitle:
      'Chart tools are powerful, simple to use, and free. Try out our rich gallery of interactive charts and data tools.',
    images: [
      {
        src: project1,
        description:
          'Chart tools are powerful, simple to use, and free. Try out our rich gallery of interactive charts and data tools.',
      },
      {
        src: project2,
        description:
          'Chart tools are powerful, simple to use, and free. Try out our rich gallery of interactive charts and data tools.Chart tools are powerful, simple to use, and free. Try out our rich gallery of interactive charts and data tools.',
      },
      {
        src: project3,
        description:
          'Try out our rich gallery of interactive charts and data tools.',
      },
    ],
    descriptions: [
      'Chart tools are powerful, simple to use, and free. Try out our rich gallery of interactive charts and data tools.',
      'Chart tools are powerful, simple to use, and free. Try out our rich gallery of interactive charts and data tools. Chart tools are powerful, simple to use, and free. Try out our rich gallery of interactive charts and data tools.',
      'Chart tools are powerful, simple to use, and free. ',
    ],
  },
  {
    id: 2,
    to: 'design-app',
    title: 'Design App',
    subTitle:
      'Bring your design ideas to life with the iOS & Android Desygner Apps. Update and share your work from a computer, tablet or phone.',
    images: [
      {
        src: project1,
        description:
          'Bring your design ideas to life with the iOS & Android Desygner Apps.',
      },
      {
        src: project2,
        description:
          'Bring your design ideas to life with the iOS & Android Desygner Apps. Update and share your work from a computer, tablet or phone.',
      },
      {
        src: project3,
        description:
          'Update and share your work from a computer, tablet or phone.',
      },
    ],
    descriptions: [
      'Bring your design ideas to life with the iOS & Android Desygner Apps. Update and share your work from a computer, tablet or phone.',
      'Bring your design ideas to life with the iOS & Android Desygner Apps. Update and share your work from a computer, tablet or phone.',
      'Bring your design ideas to life with the iOS & Android Desygner Apps. Update and share your work from a computer, tablet or phone.',
    ],
  },
  {
    id: 3,
    to: '3D-photos',
    title: '3D Photos',
    subTitle:
      'This 3D Photo app has accumulated over 15 million users over the last few years and with the rise of 3D Photos this year has attracted a massive following in 2019.',
    images: [
      {
        src: project1,
        description:
          'This 3D Photo app has accumulated over 15 million users over the last ',
      },
      {
        src: project2,
        description:
          'This 3D Photo app has accumulated over 15 million users over the last few years and with the rise of 3D Photos',
      },
      {
        src: project3,
        description:
          'This 3D Photo app has accumulated over 15 million users over the last few years and with the rise of 3D Photos this year has attracted a massive following in 2019.',
      },
    ],
    descriptions: [
      'This 3D Photo app has accumulated over 15 million users over the last few years and with the rise of 3D Photos this year has attracted a massive following in 2019.',
      'This 3D Photo app has accumulated over 15 million users over the last few years and with the rise of 3D Photos this year has attracted a massive following in 2019.',
      'This 3D Photo app has accumulated over 15 million users over the last few years and with the rise of 3D Photos this year has attracted a massive following in 2019.',
    ],
  },
];

export default function() {
  const { name } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    setProject(projects.find((p) => p.to === name));
  }, [name]);

  if (!project) {
    return (
      <BacgroundImage image={heroImage}>
        <Hero header="Project not found">
          <CallToAction to="/" />
        </Hero>
      </BacgroundImage>
    );
  }
  const { title, subTitle, images, descriptions } = project;
  return (
    <>
      <BacgroundImage image={heroImage}>
        <Hero header={title} subheader={subTitle}>
          <CallToAction to="/projects/chart-app/#project" />
        </Hero>
      </BacgroundImage>

      <Project images={images} />
      <Carousel images={images} descriptions={descriptions} />
    </>
  );
}
