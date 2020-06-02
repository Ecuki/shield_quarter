import React, { useState, createContext } from 'react';
import Section from '../components/Section';

import Heading from '../components/Heading';
import styled from 'styled-components';
import Job from './Job';
const jobs = [
  {
    id: 1,
    position: 'Senior JavaScript Fullstack Developer',
    requirements: [
      'Minimum 5 years of commercial programming experience',
      'Ability to write great, modern JavaScript code - both on a frontend and backend side',
      'Worked a lot with NodeJS',
      'Worked with Firebase, understand how to build scalable and performant applications',
      'Fluent English is a must',
    ],
    additional: [
      'Bachelor or higher degree in computer science field',
      'Google Cloud fundamentals',
      'Twilio/SendGrid fundamentals',
    ],
    benefits: [
      'The individual growth path - comprehensive projects',
      'Growth budget - 12 000 PLN per year',
      'Flexible working hours - you can come to work from 7 - 10 a.m',
      'Fresh fruits every week',
      'Amazon Kindle',
      'Funding of public transport ',
      'Integration Parties',
    ],
  },
  {
    id: 2,
    position: 'Azure Architect',
    requirements: [
      'Minimum 3 years of experience in designing an architecture for a cloud native application',
      'Minimum 3 years of experience with Azure Cloud Platform, (platform components and assembling application and runtime architecture)',
      'Certification AZ300 and AZ301',
      'Experience with CI/CD tools such as Git, Jenkins and Azure DevOps',
      'App Service including Web Apps, Mobile Apps, API Apps or Logic Apps',
    ],
    additional: [
      ' Relational databases - database architecture and design (PostgreSQL, MySQL, Oracle, MS SQL Server, Azure SQL DB PaaS Service)',
      'NoSQL databases (Cosmos DB, Cassandra, MongoDB)',
    ],
    benefits: [
      'Opportunity to develop your skills through participation in projects based on the newest technologies',
      'Direct cooperation with worldwide leading IT companies',
      'Flexible working hours - you can come to work from 7 - 10 a.m',
      'Fresh fruits every week',
      'Competitive benefits package: e.g. private healthcare, additional insurances, lunch vouchers, sport packages',
      'Funding of public transport ',
      'Integration Parties',
    ],
  },
  {
    id: 3,
    position: '.NET DEVELOPER WITH REACT',
    requirements: [
      'Experience: more than 3 years as a software .NET developer;',
      'Experience in working with React',
      'Very good knowledge: .NET Framework, C#, Entity Framework, LINQ, WPF/MVVM',
      'Have Working experience: MSSQL, Unit tesing (NUnit)',
      'At least basics: Agile/SCRUM',
    ],
    additional: ['MVVMLight', 'DevExpress WPF', 'Jenkins'],
    benefits: [
      'Flexible forms of employment and working hours (CoE or B2B)',
      'An interesting, challenging job in the dynamically developing Capital Group company',
      'Flexible working hours - you can come to work from 7 - 10 a.m',
      'Fresh fruits every week',
      'Competitive benefits package: e.g. private healthcare, additional insurances, lunch vouchers, sport packages',
      'Funding of public transport ',
      'Integration Parties',
    ],
  },
  {
    id: 4,
    position: 'Senior React Native Developer',
    requirements: [
      'React Native',
      'Experience in working with React',
      'REST APIs, APIgee, Webmethod',
      'Have Working experience: MSSQL, Unit tesing (NUnit)',
      'At least basics: Agile/SCRUM',
    ],
    additional: ['MVVMLight', 'DevExpress WPF', 'Jenkins'],
    benefits: [
      'Flexible forms of employment and working hours (CoE or B2B)',
      'An interesting, challenging job in the dynamically developing Capital Group company',
      'Flexible working hours - you can come to work from 7 - 10 a.m',
      'Fresh fruits every week',
      'Competitive benefits package: e.g. private healthcare, additional insurances, lunch vouchers, sport packages',
      'Funding of public transport ',
      'Integration Parties',
    ],
  },
];
export const JobsContext = createContext();
const Jobs = styled(Section)`
  background: rgb(241, 245, 253);

  background: linear-gradient(
    0deg,
    rgba(241, 245, 253, 1) 0%,
    rgba(3, 133, 187, 1) 100%
  );
  padding: 20px;
`;
export default function() {
  const [activeJob, setActiveJob] = useState(null);
  const isActiveJob = (id) => id === activeJob;
  const toggleActiveJob = (id) =>
    id === activeJob ? setActiveJob(null) : setActiveJob(id);

  return (
    <JobsContext.Provider value={{ isActiveJob, toggleActiveJob }}>
      <Jobs id="jobs">
        <Heading size="medium" color="white">
          We are recruiting
        </Heading>
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </Jobs>
    </JobsContext.Provider>
  );
}
