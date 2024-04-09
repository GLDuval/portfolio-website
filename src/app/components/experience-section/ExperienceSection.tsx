import CaeLogo from 'public/images/cae-logo.png';
import ExpediaLogo from 'public/images/expedia-group-Logo.png';
import MediavoreLogo from 'public/images/mediavore-logo.jpg';
import OraMedicalLogo from 'public/images/ora-medical-logo.png';

import ExperienceCard from '@/app/components/experience-section/ExperienceCard';

const ExperienceSection = () => {
  return (
    <div className='max-w-6xl mx-auto px-4'>
      <div className='space-y-5'>
        <h2 className='text-4xl font-bold'>Experience</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 content-center justify-stretch'>
          <ExperienceCard
            title='Software Engineer Intern'
            logo={ExpediaLogo}
            period='4 months in 2023'
            tasks={[
              'Developed Spring backend services lerveraging AI models to deliver relevant destination images',
              'Deployed services to Kubernetes clusters',
              'Created a React web application to manage the services configurations',
              'Used gRPC to create and use RPC APIs',
              'Built a tool that automatically exports UAT run results to Elasticsearch, triggered by GitHub Actions',
            ]}
            skills={[
              'Kotlin',
              'Spring',
              'Kubernetes',
              'React',
              'TypeScript',
              'GraphQL',
              'gRPC',
              'Datadog',
              'Docker',
            ]}
          />
          <ExperienceCard
            title='Full Stack Developer Intern'
            logo={OraMedicalLogo}
            period='4 months in 2022'
            tasks={[
              'Developed a Next.js web application from scratch to monitor patient data',
              "Implemented a complete UI redesign in React Native for the company's mobile app",
              'Made use of Realm to store and sync the mobile app offline data with the server',
              'Used Bit.dev to share and reuse components between the web and mobile app',
            ]}
            skills={[
              'React',
              'React Native',
              'TypeScript',
              'Next.js',
              'GraphQL',
              'Apollo',
              'Realm',
            ]}
          />
          <ExperienceCard
            title='Full Stack Developer Intern'
            logo={CaeLogo}
            period='4 months in 2021'
            tasks={[
              'Created a PHP search engine application that utilizes a NLP model to prevent duplicate Jira issues by intelligently detecting similar tickets.',
              'Designed and implemented a .NET API to store and share files using a SQL database',
              "Coded a customizable and reusable React form component that was added to my team's Storybook",
            ]}
            skills={[
              'C#',
              '.NET',
              'PHP',
              'Laravel',
              'React',
              'TypeScript',
              'SQL',
            ]}
          />
          <ExperienceCard
            title='Web Developer'
            logo={MediavoreLogo}
            period='8 months in 2020'
            tasks={[
              'Maintained websites of 200 different clients',
              'Created a client-friendly bug reporting tool that allows users to select and comment on HTML elements directly within their website using JavaScript and jQuery',
              "Developed a PHP application to manage the company's clients' information internally",
            ]}
            skills={['PHP', 'JavaScript', 'SQL', 'JQuery']}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
